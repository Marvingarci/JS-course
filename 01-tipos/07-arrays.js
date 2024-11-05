let animales = [
    'Perro',
    'Gato',
    'Pato',
    'Conejo',
    'Pez',
    'Araña',
    'Cocodrilo',
    'Elefante',
    'Jirafa',
    'Cebra'
]

console.log(animales[5]);

animales[5] = 'Ardilla';
console.log(animales);

// si agregamos un elemento a un array en una posicion que no existe adelantada
//se crean los elementos vacios en las posiciones anteriores
animales[15] = 'Tigre';
console.log(animales);

// si intentamos acceder a uno que esta vacio nos da undefined
console.log(animales[10]);


console.log(typeof animales); //Nos dice que es object, no array
console.log(animales.length)