let promesa1 = new Promise((res, rej)=>{
    res(12)
})

let promesa2 = new Promise((res, rej)=>{
    rej('Error danmn')// hacemos que la promesa falle para usar el catch
})

promesa1
.then(res=>{
    if(res > 10){
        return promesa2
    }
})
.then(res2=>{
    return res2; 
})
.catch(console.log)// Este metodo se ejecutara si y solo si, una de las promesas encadenadas falla con reject
.finally(()=>console.log("Siempre see va a ejecutar falle o no"))





