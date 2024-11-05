// const numeros = [1, 2, 3, 4];

// const suma = numeros.reduce((acc, el)=> acc+=el , 0)
// console.log(suma); // 10


const anidado = [[1, 2], [3, 4], [5, 6], 7];

const plano = anidado.reduce((acc, el) => acc.concat(el), []);
//const plano = anidado.flat();// Esta es otra manera de aplanar datos

console.log(plano); // [1, 2, 3, 4, 5, 6, 7]


const usuarios = [
    { nombre: 'user1', edad: 24 },
    { nombre: 'user2', edad: 27 },
    { nombre: 'user3', edad: 31 },
    { nombre: 'user4', edad: 19 },
]

const indexado= usuarios.reduce((acc, user) => ({...acc, [user.nombre]: user }) , {});
console.log(indexado['user1'])
