let objeto = {
    id: 1,
    name: "Luis",
    login: function(){},
    logout: function(){}
}

function tieneProp(obj, prop){
    let existe = false
    for(let llave in obj){
        if(llave === prop) existe = true
    }
    return existe
}

console.log(tieneProp(objeto, 'login'))