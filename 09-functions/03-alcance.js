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
// porque se puede modificar la variable afuera?
// porque se esta modificando la variable afuera dentro de la funcion alcance
// y no se esta declarando una nueva variable afuera
// si se declara una nueva variable afuera dentro de la funcion alcance
// no se modifica la variable afuera
console.log(afuera) // modificado