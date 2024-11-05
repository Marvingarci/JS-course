function hola(){
    return 'Hola Mundo';
}
const res = hola();
console.log(res);

// Fat Arrow Function
// estas funciones tienen un return implicito y no es necesario poner la palabra reservada return
const holaArrow = message => 'Hola Mundo '+message;

const resArrow = holaArrow('Chancho');
console.log(resArrow);