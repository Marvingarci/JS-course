const letras = ['a', 'b', 1, 'c', 'd', 1];

console.log(letras.indexOf('c'));// 3
console.log(letras.indexOf('1')) // 2:  porque fue el primero que encontro
// Para buscar el ultimo que se encontro se usa lo siguiente
console.log(letras.lastIndexOf(1)) // 5  


console.log(letras.includes('d'))// este metodo devuelve boolean

// SI queremos buscar comenzando con un indice posterior a 0,
// Se lo podemos parar como segundo arg
console.log(letras.indexOf(1, 3))// este devolvera 5 porque sera el segundo 1



