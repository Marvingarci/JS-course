let usuarios = [
    { nombre: 'Nico', edad: 17, plan: 'premium' },
    { nombre: 'Chanchito', edad: 13, plan: 'free'  },
    { nombre: 'Fernanda', edad: 32, plan: 'free'  },
];

let users = [
    { name: 'Michael', age: 22, membership: 'premium' },
    { name: 'Kevin', age: 27, membership: 'free'  },
    { name: 'Happy Pig', age: 29, membership: 'free'  },
];


// Unificar las estructuras de usuarios y user
// fusionar los array
// ordenar por edad
// crear HTML
// <li>Nombre: name, Edad: age</li>
// Imprimir en console

let usuariosTrans = usuarios.map(u => ({name: u.nombre, age: u.edad, membership: u.plan }));
let unified = users.concat(usuariosTrans);

unified.sort((a,b)=> a.age - b.age);

let html  = `<ul>${
    unified.map(u => `<li>Nombre: ${u.name}, Eda: ${u.age}</li>`)
    }</ul>`
console.log(html) 

