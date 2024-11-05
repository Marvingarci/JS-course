let usuarios = [
    { nombre: 'Juan', edad: 13, plan: 'premium' },
    { nombre: 'Ana', edad: 18, plan: 'free'  },
    { nombre: 'Pedro', edad: 30, plan: 'free'  },
    { nombre: 'María', edad: 28, plan: 'gold'  }
];

function getPaidUsers(users){
    return users.filter(u => u.plan === 'gold' || u.plan === 'premium')
}



const res = getPaidUsers(usuarios);
console.log(res)