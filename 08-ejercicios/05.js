let usuarios = [
    { nombre: 'Nico', edad: 17, plan: 'premium' },
    { nombre: 'Ana', edad: 13, plan: 'premium'  },
    { nombre: 'Fernanda', edad: 32, plan: 'free'  },
    { nombre: 'María', edad: 25, plan: 'gold'  }
];

function obtenerMayor(users){
    let mayor = users[0];
    for(let u of users){
        mayor = u.edad > mayor.edad ? u : mayor;
    }
    return mayor
}

console.log(obtenerMayor(usuarios))