let arr1 = [1, 2];
let arr2 = [3, 4];


// no modifica los arrays originales
// emite un nuevo array

let combinados = arr1.concat(arr2); // [1, 2, 3, 4]
console.log(combinados);

// si queremos dividir un array en dos partes
// podemos usar el método slice
// slice recibe dos argumentos, el primero es el índice de inicio
// y el segundo es el índice de fin (no inclusivo)
let divididos = combinados.slice(1, 3);
console.log(divididos); // [2, 3]

let divididos2 = combinados.slice(1);
console.log(divididos2); // [2, 3, 4]

// si queremos copiar un array podemos hacerlo de la siguiente manera
let divididos3 = combinados.slice();
console.log(divididos3); // [1, 2, 3, 4]
