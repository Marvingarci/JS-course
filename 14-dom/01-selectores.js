
// HTMLElement
let htmlElement = document.getElementById('cuerpo');

// HTMLCollection -> Se parece a un array pero no lo es
let elementosRed = document.getElementsByClassName('red')

// NodeList
let byName = document.getElementsByName('chanchito');

// HTMLCollection
let porEtiqueta = document.getElementsByTagName('p');



// Estos dos metodos son mas lentos que los de arriba
// HTMLElement => . para clases, # para id, [] para atributos
let porSelector = document.querySelector('#cuerpo');
// NodeList
let porSelectorAll = document.querySelectorAll('p');

// HTMLCollection VS NodeList
// HTMLCollection -> se actualiza en tiempo real cuando se eliminan o agregan elementos
// NodeList -> no se actualiza, debemos hacer nuevamente el llamado a querySelectorAll

let plive = document.querySelectorAll('p'); // NodeList
let pstatic = document.getElementsByTagName('p'); // HTMLCollection
console.log(plive, pstatic)

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive, pstatic)// plive(5), nodelist(4)





