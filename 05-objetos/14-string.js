const saludo = 'Hola Mundo';

const despedida = new String('Adios Mundo');
console.log(typeof saludo,
    typeof despedida
) // string object

console.log('long', saludo.length);
console.log('indexOf', saludo.indexOf('Mundo'));//IndexOf devuelve el indice 5 en caso de que exista, -1 en caso contrario
console.log('includes', saludo.includes('Mundo'));// En cambio includes devuelve true en caso de que exista, false en caso contrario
// Reemplaza la primera ocurrencia de la palabra Mundo por Earth, pero sin modificar el valor original
// si queres modificar el valor original, tenes que asignar el valor a una nueva variable
console.log('includes', saludo.replace('Mundo', 'Earth'));
let nuevoSaludo = saludo.replace('Mundo', 'Earth');
console.log('nuevoSaludo', nuevoSaludo);

console.log('toLowerCase', saludo.toLowerCase());  // hola mundo
console.log('toUpperCase', saludo.toUpperCase());  // HOLA MUNDO

// Substring

console.log('substring', saludo.substring(0, 4)); // Hola
console.log('substring', saludo.substring(5)); // Mundo

const espacio = '    Hola Mundo    ';
console.log('trim', espacio.trim()); // 'Hola Mundo' tambien esta el trimStart y trimEnd


