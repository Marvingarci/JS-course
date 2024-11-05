//short-ciurcuit

//Falsy
// false, 0, '', "", ``, null, undefined, NaN

let nombre = 'Luis';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('fn1');
    // return true
    return false// solo se ejecuta la primera funcion
}

function fn2(){
    console.log('fn2');
    return true
}
// si ambas funciones son true, se ejecutan las dos
// si una es falsa, no se ejecuta la siguiente
let x = fn1() && fn2();




