let usuarios = [
    { id: 1, activo: true},
    { id: 2, activo: true},
    { id: 3, activo: true},
]

// Verifica que todos los elementos cumplan la condición 
// let todosActivos =usuarios.every( u => {
//     console.log("Todos activos", u.id);
//     return u.activo
// });

// console.log(todosActivos); // false


//Some: Verifica que al menos un elemento cumpla la condición
let algunoActivo = usuarios.some( u => {
    console.log("Alguno activo", u.id);
    return u.activo
});

console.log(algunoActivo); // true