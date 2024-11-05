let longitud = 7;

function crearArr(long){
    let res = []
    for(let i = 1; i <= long; i++){
        res.push(i)
    }
    return res
}

console.log(crearArr(longitud))