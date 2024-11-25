// Promesas representan el estado de una applicacion
// Pending, Rechazada, Terminada

let promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Hola Mundo'), 1000);
})

promesa.then((val)=>{
    console.log(val)
}, 
(err)=>{
    console.log(err)
})

