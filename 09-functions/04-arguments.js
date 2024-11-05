function suma() {
   return Array.from(arguments).reduce((acc, val) => acc + val, 0);
}
// console.log(suma(1, 2)); // el segundo argumento es undefined y la suma con undefined es NaN
console.log(suma(1, 2, 3, 4, 5))// el tercer argumento en adelante es ignorado



