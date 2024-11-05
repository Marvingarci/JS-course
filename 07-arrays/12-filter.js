
let usuarios = [
    { nombre: 'Juan', edad: 13 },
    { nombre: 'Ana', edad: 18 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'María', edad: 28 }
];

const mayoresDeEdad = usuarios.filter((usuario) => usuario.edad >= 18);
console.log(mayoresDeEdad); // [{ nombre: 'Ana', edad: 18 }, { nombre: 'Pedro', edad: 30 }, { nombre: 'María', edad: 28 }]

const menoresDeEdad = usuarios.filter((usuario) => usuario.edad < 18);
console.log(menoresDeEdad); // [{ nombre: 'Juan', edad: 13 }]

