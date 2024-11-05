const usuarios = [
    { id: 1, nombre: 'Ada Lovelace' },
    { id: 1, nombre: 'Grace Hopper' },
    { id: 3, nombre: 'Radia Perlman' }
]
// Find : Return the first element that satisfies the condition, otherwise undefined
// the property we are looking has to be unique to avoid ambiguity
// the function inside the find method has to return a boolean value and it is named predicate
const resultado = usuarios.find((usuario)=> usuario.id === 1 ); // { id: 2, nombre: 'Grace Hopper' }
console.log(resultado);


// FindIndex : Return the index of the first element that satisfies the condition, otherwise -1
const index = usuarios.findIndex((usuario)=> usuario.id === 1 ); // 1