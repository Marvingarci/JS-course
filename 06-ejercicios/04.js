let objeto = {
    id: 1,
    name: "Luis",
    login: function(){},
    logout: function(){}
}

function cualesMetodos(obj){
    for(let llave in objeto){
        if(typeof obj[llave] == 'function'){
            console.log(llave)
        }
    }
}

cualesMetodos(objeto)