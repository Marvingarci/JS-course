// Crear una copia del objeto sin usar spread operator ni Object.assing
let obj1 = {id: 1, name: "Chancho"};

function crearCopia(obj){
    let newObj = {}
    // one solution
    // for(let llave in obj){
    //     newObj[llave] = obj[llave]
    // }

    // Another
    Object.entries(obj).forEach((val)=>{
        newObj[val[0]] = val[1]
    })
    return newObj
}
let obj2 = crearCopia(obj1)
console.log({obj1, obj2})