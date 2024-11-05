let numeros = [15, 10, -3]

// Ordenar los números y se aplica al array original
numeros.sort();
console.log(numeros); // [-3, 10, 15]

numeros.reverse();
console.log(numeros); // [15, 10, -3]

let letras = ['z', 'a', 'c', 'b'];
letras.sort();
console.log(letras); // ['a', 'b', 'c', 'z']


// Ordenar con mayúsculas
// Cuando se ordena un array de strings, las letras mayúsculas se ordenan antes que las minúsculas
// Todo esto se basa en el valor ASCII de los caracteres
let conMayusculas = ['Z', 'a', 'C', 'b'];
conMayusculas.sort();
console.log(conMayusculas); // ['C', 'Z', 'a', 'b']

// para que funciones se debe hacer esto
conMayusculas.sort((a, b) => a.localeCompare(b));
console.log(conMayusculas); // ['a', 'b', 'C', 'Z']


let usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 24 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'María', edad: 28 }
]

// Ordenar por edad
// sort recibe una función de comparación
// donde a y b son dos elementos del array
// si la función retorna un número negativo, a va antes que b
// si la función retorna un número positivo, b va antes que a
// si la función retorna 0, a y b se consideran iguales
let userSorted = usuarios.sort((a, b) => {
    if(a.edad < b.edad){
        return 1
    }
    if(a.edad > b.edad){
        return -1
    }
    return 0
})

console.log(userSorted)