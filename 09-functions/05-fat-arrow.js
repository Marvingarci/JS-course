// Fat Arrow Functions
// No tienen argumentos, no tienen this, no tienen super

const suma = () => {
    // si uso arguments en una arrow function, obtendré un error porque no tienen el objeto arguments
    // return Array.from(arguments).reduce((acc, val) => acc + val, 0);
 }

 console.log(suma(1, 2, 3, 4, 5))