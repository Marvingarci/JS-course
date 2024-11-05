let afuera = 'afuera'

function alcance(){
    function saludo(){}
    afuera = 'modificado'
    var vieja='ya no debes usarla'
    let variable = 'variable'
    const constante = 'constante'
}

// console.log(saludo) // ReferenceError aqui porque saludo pertenece a la funcion alcance

console.log(afuera) // afuera
alcance()
console.log(afuera) // modificado