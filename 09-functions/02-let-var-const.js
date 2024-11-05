// Hoisting = elevacion de las declaraciones de las variables y funciones al inicio del archivo
// console.log(saludo)// function normal
// console.log(vieja) // undefined
// console.log(hola) // ReferenceError: Cannot access 'hola' before initialization
// console.log(chao) // ReferenceError: Cannot access 'chao' before initialization

function saludo(){}
let hola = 'Hola'
const chao = 'Chao'
var vieja = 'ya no debes usarla'

// cuando se usen var y function van a estar en Window
console.log(window)
