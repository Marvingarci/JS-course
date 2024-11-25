// function User(){
//     let name = "Marvin"// esta es privada
//     this.getName= ()=>{// y tiene que ser accesada por este metodo
//         return name
//     }
// }


class User{
  #name; // El # es para hacerla privada
  
  constructor(name){
    this.#name = name
  }

  #logger(){
    console.log("Loguer")
  }

  getName(){
    this.#logger()
    return this.#name
  }
}

let u = new User('Marvin')
//console.log(u.#name)// Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class 
// u['#name'] = 'lala';
console.log(u)







