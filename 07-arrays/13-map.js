let usuarios = [
    { nombre: 'Juan', edad: 13 },
    { nombre: 'Ana', edad: 18 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'María', edad: 28 }
];

const lista = usuarios
    .filter(u => u.edad > 17)
    .map(u=> `<li>${u.nombre}</li>`);
console.log(lista); // [ '<li>Juan</li>', '<li>Ana</li>', '<li>Pedro</li>', '<li>María</li>' ]
const html = `<ol>${lista.join('')}</ol>`
console.log(html); // <ol><li>Juan</li><li>Ana</li><li>Pedro</li><li>María</li></ol>



// tenemos que hacer un wra
// const mapped = usuarios.map(u=> 
//     ({
//         ...u, 
//         mayor: u.edad > 17
//     })
// )

// console.log(mapped); // [ { nombre: 'Juan', edad: 13, mayor: false }, { nombre: 'Ana', edad: 18, mayor: true }, { nombre: 'Pedro', edad: 30, mayor: true }, { nombre: 'María', edad: 28, mayor: true } ]



