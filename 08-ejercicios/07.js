let usuarios = [
    { nombre: 'Luisa', edad: 17, plan: 'premium' },
    { nombre: 'María', edad: 25, plan: 'gold'  },
    { nombre: 'Fernanda', edad: 32, plan: 'free'  },
    { nombre: 'Luisa', edad: 13, plan: 'gold'  },
    { nombre: 'Ana', edad: 13, plan: 'premium'  },
    { nombre: 'Drake', edad: 13, plan: 'gold'  },
];

function groupBy(arr, prop){
    // let res = {}
    // for(let u of arr){
    //     let key = u[prop];
    //     res[key] = res[key] ? res[key] : []
    //     res[key].push(u)
    // }
    // return res
    return arr.reduce((acc, u)=> {
        let key = u[prop];
        acc[key] = acc[key] ? acc[key]: [];
        acc[key].push(u)
        return acc
    }, {})
}

const grouped = groupBy(usuarios, 'plan')
console.log({grouped})