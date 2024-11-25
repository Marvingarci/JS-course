let promesa1 = user => new Promise((res, rej)=>{
    setTimeout(()=> res(user+" Danm"), 1000)
})

let promesa2 = userMod => new Promise((res, rej)=> res(userMod+" Garcia"))

let promesa3 = (param1, param2) => new Promise((res, rej)=>{
    res(param1+" "+param2)
})

// promesa1("Marvin")
// .then(user => promesa2(user))
// .then(console.log)

async function main(){
    try{
        let a = await promesa1("Marvin");
        let b = await promesa2(a);
        const res = await promesa3(a, b)
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

main()