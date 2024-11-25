let promesa1 = new Promise((res, rej)=>{
    res(12)
})

let promesa2 = new Promise((res, rej)=>{
    res(15)
})

promesa1
.then(res=>{// se puede retornar un valor o otra promesa para hacer chaining
    if(res > 10){
        return promesa2
    }
    // return res + 18// res vale  12 y le mandamos la otra promesa
})
.then(res2=>{
    return res2; 
}) // el valor sera 30