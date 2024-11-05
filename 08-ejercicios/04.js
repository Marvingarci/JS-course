let usuarios = [
    { nombre: 'Nico', edad: 17, plan: 'premium' },
    { nombre: 'Ana', edad: 13, plan: 'premium'  },
    { nombre: 'Pedro', edad: 32, plan: 'free'  },
    { nombre: 'María', edad: 25, plan: 'gold'  }
];

function cuantosPremium(users){
    // return users.filter(u => u.plan !== 'free').length
    return users.reduce((acc, user) => user.plan !== 'free' ? acc+1 : acc, 0)
}

function cuantosMayores(users){
    // return users.filter(u => u.edad > 17).length
    return users.reduce((acc, user) => user.edad > 17 ? acc+1 : acc, 0)

}


console.log(cuantosPremium(usuarios))
console.log(cuantosMayores(usuarios))