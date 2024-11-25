let promesa1 = user => new Promise((res, rej)=>{
    res(user+" Danm")
})

let promesa2 = userMod => new Promise((res, rej)=> res(userMod+" Garcia"))

promesa1("Marvin")
.then(user => promesa2(user))
.then(console.log)