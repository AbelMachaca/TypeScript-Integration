//let a = "hola"  //string


//a = 2    //No puede ser reasignado la variable a otra, tiene un fuerte tipado

//console.log(typeof a)



/*
El navegador no reconoce Typescript

La compilación se maneja en Typescript

Mientras que la ejecución se realiza en JavaScript

*/

//let sujeto: string = "Pepe" //la forma de declarar


/*
const persona = {
    name: "pepe",
    age: 30
}


persona.age
*/

//INFERENCIA de typescript: es capaz de observar como es el objeto y decirte como es su forma. name: String, age: Number

/*
const number = 1

let n: number = 2
*/

//como a y b infiere que son number sin decirle nada


/*
const a = 1
const b = 2
const c = a + b
*/
// c también será number






// siempre que se pueda en typescript hay que intentar escribir los menos tipos posibles


/*
let texto = "hola"
*/
// texto.

//Ts te sugiera ya por defecto que es un string y al colocar el punto te ofrece todos los metodos que puedes usar con la cadena de texto


//------------------------------------------------------

// qué pasa cuando ts no sabe inferir un tipo

// let a    // ANY esto significa que ignore el tipo


// esto significa que IGNORE el tipado de Ts

//let b:any = "hola"

//b. //se pierde el autocomplete

/*
function saludar(name: string) {
    console.log(`Hola ${name}`)
}

saludar("pepe")*/
//saludar(2)
//las funciones tienen implicitamente el any en los parametros


/*
function saludar({name, age}){
    console.log(`hola ${name}, tienes ${age} años`)
}

saludar({name: 2, age: "pepe"})
*/

//1er forma para typar funciones con objeto
/*
function saludar({name, age}: {name: string, age: number} ){
    console.log(`hola ${name}, tienes ${age} años`)
}

saludar({name: "pepe", age: 2})
*/



//2da forma para typar funciones con objeto
/*
function saludar(persona: {name: string, age:number} ){

    const {name, age} = persona
  
    console.log(`hola ${name}, tienes ${age} años`)
}

saludar({name: "pepe", age: 2})
*/





//se puede tipar el return
/*
function saludar({name, age}: {name: string, age: number}): string{
    console.log(`hola ${name}, tienes ${age} años`)
    return age
}

saludar({name: "pepe", age: 2})
*/
/*
const sayHiFromFunction = (fn) => {
    fn("pepe")
}

sayHiFromFunction((name) =>{
    console.log(`Hola ${name}`)
})
*/

/*
const sayHiFromFunction = (fn: Function) => { //Function es el ANY de las funciones
    fn("pepe")
}

sayHiFromFunction((name: string) =>{
    console.log(`Hola ${name}`)
})

sayHiFromFunction(() =>{
    return Math.random()
})
*/
/*

const sayHiFromFunction = (fn: (name: string) => void) => { //void es porque no devuelve nada. no importa lo que devuelva. si pongo string, deberia retornar un string
    fn("pepe")
}

const sayHi = (name: string) =>{
    console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)
*/



//-----------------------------------------------------------------------

//Tipar Arrow Functions
/*
const sumar = (a: number, b: number): number => { //recuerda siempre intentar evitar tiparlo porque normalmente lo infiere, osea sabe que tipo es
    return a + b
}


const restar:  (a: number, b: number) => number = (a, b) => {
    return a - b
}
*/





//Funciones que sabes nunca van a devolver nada
//never
/*
function throwError(message: string): never {
    throw new Error(message)
}
*/




// !important Las funciones no tienen inferencia
// inferencia funciones anonimas segun el contexto

//hay veces que la inferencia si que funciona

/*
const avengers = ["spidey", "hulk", "avengers"]

avengers.forEach(avenger =>{
    console.log(avenger.toUpperCase())
})

const avengers = ["spidey", "hulk", "avengers"]

avengers.forEach(function (avenger) {
    console.log(avenger.toUpperCase())
})
*/

//--------------------------------------------------------------

//Objetos
/*
let hero = {
    name: "thor",
    age: 1500
}

hero.power


function createHero(name: string, age: number){
    return {name, age}
}

const thor = createHero("thor", 1500)
//estamos haciendo lo mismo?, no sabemos si son del mismo tipo

*/


//Type Alias
//creando nuestro TIPO, "PascalCase"
/*
type Hero = {
    name: string
    age: number
}
let hero: Hero = {
    name: "thor",
    age: 1500
}

function createHero(name: string, age: number): Hero{
    return {name, age } // no podemos agregar nada ahi al return como un boolean. isActive: true
}

const thor = createHero("Thor", 1500)
*/


/*
type Hero = {
    name: string
    age: number
}
let hero: Hero = {
    name: "thor",
    age: 1500
}

function createHero(hero: Hero): Hero{
    const { name, age} = hero
    return {name, age } // no podemos agregar nada ahi al return como un boolean. isActive: true
}

const thor = createHero({name:"Thor", age: 1500})
*/


// Optional properties
/*
type Hero = {
    id?: number
    name: string
    age: number
    isActive?: boolean
}
let hero: Hero = {
    name: "thor",
    age: 1500
}

function createHero(hero: Hero): Hero{
    const {name, age} = hero
    return {name, age } 
}

const thor = createHero({name:"Thor", age: 1500})

//console.log( thor.isActive) //--> True

//thor.id?.toString()

thor.id = 454135143513513513513
*/

/*
type Hero = {
    readonly id?: number //recordar que el readonly no hace que sea inmutable, en js sigue pudiendose cambiar, lo que hace es solo avisarnos en ts de un error
    name: string
    age: number
    isActive?: boolean
}
let hero: Hero = {
    name: "thor",
    age: 1500
}

function createHero(hero: Hero): Hero{
    const {name, age} = hero
    return {name, age } 
}

const thor = createHero({name:"Thor", age: 1500})

//console.log( thor.isActive) //--> True

//thor.id?.toString()

thor.id = 454135143513513513513

*/
/*
type Hero = {
    id?: number //recordar que el readonly no hace que sea inmutable, en js sigue pudiendose cambiar, lo que hace es solo avisarnos en ts de un error
    name: string
    age: number
    isActive?: boolean
}
let hero: Hero = {
    name: "thor",
    age: 1500
}

function createHero(hero: Hero): Hero{
    const {name, age} = hero
    return {name, age } 
}

const thor = Object.freeze(createHero({name:"Thor", age: 1500}))

//console.log( thor.isActive) //--> True

//thor.id?.toString()

thor.id = 454135143513513513513
*/