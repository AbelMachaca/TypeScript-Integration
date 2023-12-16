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


const sayHiFromFunction = (fn: (name: string) => void) => { //void es porque no devuelve nada. no importa lo que devuelva. si pongo string, deberia retornar un string
    fn("pepe")
}

const sayHi = (name: string) =>{
    console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)