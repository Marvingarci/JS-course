// Declaracion de funciones

console.log(suma)// No tira error  
console.log(resta)// Si tira un error porque aun no esta definida

// Named function
function suma(){
    console.log('sumando')
}

// Funcion anonima
// function (){
//     console.log('funcion anonima')
// }

// Expression de functiones: Function Expression
let resta = function(){ // expresion de funcion anonima
    console.log('Restando')
}

let multiplica = function multi(){
    console.log('Multiplicando')
}

const divide = ()=>{
    console.log("Dividiendo")
}