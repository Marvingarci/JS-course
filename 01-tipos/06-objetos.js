//Objetos no son primitives, son referencias

//Objetos son colecciones de propiedades

let nombre = 'Juan';
let apellido = 'Perez';
let edad = 30;

let persona = {
    nombre,
    apellido,
    edad
}
console.log(persona);
// otra manera para acceder a las propiedas de un objeto
console.log(persona['edad']);

persona.nombre = 'Maria';

let llave = 'edad';
// esta manera de acceder a las propiedades de un objeto es muy util cuando no sabemos el nombre de la propiedad
persona[llave] = 25;


// para eliminar propiedades de un objeto
delete(persona.edad);

console.log(persona);

