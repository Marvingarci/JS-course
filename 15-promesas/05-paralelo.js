const p1 = Promise.reject(3);
const p2 = 42// cuando un valor primitivo se pasa a Promise.all se entiende como una promesa
const p3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'foo') // foo se le pasa a resolve como parametro
})
const p4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, 'primero que p3') // foo se le pasa a resolve como parametro
})

// Promise.all([p1, p2, p3])// si y solo si, todas resuelven se ejecuta then, con una que sea rechazada va al catch
// .then(valores => console.log('All:',valores))
// .catch(e => console.log(e)) // una que se rechace cae a este catch

// return First to resolve, if this reject the loop finish there
// Promise.race([p1,p2,p3,p4])
// .then(valor => console.log('first in resolve', valor));

//Any: difference relies on, if a promise is rejected it skips that and continues until find the one which resolves
// Promise.any([p1,p2,p3,p4])
// .then(valor => console.log('first in resolve, no matter it the previos rejected', valor));

// allSettled this method resolves or reject everything 
// return an object with the status: fullfilled or rejected, and the value or reason
Promise.allSettled([p1,p2,p3,p4])
.then(valor => console.log('All, no matter what', valor));







