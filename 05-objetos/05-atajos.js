// Atajos es una manera de crear objetos de manera mas rapida y sencilla
let obj = {}
let obj2 = new Object();

/*
new Array(); []
new Number(); 12
new String(); "" '' ``
new Boolean(); true false
*/

function Usuario(){
    this.nombre = 'Juan';
}

let user = new Usuario();
console.log(user);

// cuando se usa el new String, new Number, new Boolean, new Array
// y se verifica el typeof, el resultado es un objeto

const s1 = '1 + 1';
const s2 = new String('1 + 1');
console.log(typeof s1); // string
console.log(typeof s2); // object

console.log(eval(s1)); // 2
console.log(eval(s2)); // 1 + 1

// si queremos acceder a los valores de un objeto, se debe usar el metodo valueOf
console.log(eval(s2.valueOf())); // 2

