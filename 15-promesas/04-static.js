let promesa1 = new Promise((res, rej)=>{
    res(5)
})

let promesa2 = new Promise((res, rej)=>{
    res(13)
})

promesa1
.then(res=>{
    if(res > 10){
        return promesa2
    }
    // return Promise.reject("El numero no es mayor a 10")
    return Promise.resolve(555)
})
.then(res2=>{
    console.log('segunda promesa:', res2)
    return res2; 
})
.catch(console.log)
// .finally(()=>console.log("Siempre see va a ejecutar falle o no"))





