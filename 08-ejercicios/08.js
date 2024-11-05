let usuarios = [
    { nombre: 'Nico', edad: 17, plan: 'premium' },
    { nombre: 'Chanchito', edad: 13, plan: 'free'  },
    { nombre: 'Fernanda', edad: 32, plan: 'free'  },
    { nombre: 'Felipe', edad: 25, plan: 'gold'  }
];

// Obtener los usuarios pagos
// Ordernar de mayor a menor edad
// Devolver el nombre del usuario 
// Crear una plantilla HTML
// Imprimirla en Console

function getEx(users){
    return `<ul>
    ${users
        .filter(u => u.plan !== 'free')
        .sort((a, b) => a.edad > b.edad ? -1 : 1)
        .map(u =>  `<li>${u.nombre}</li>`)
        .join(`
    `)}
</ul>` 
}

console.log(getEx(usuarios))



