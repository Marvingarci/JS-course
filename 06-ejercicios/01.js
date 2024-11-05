function Usuario(name){
    this.name = name;
    this.id = Math.random()
}

let user = new Usuario('Felipe');
let user2 = new Usuario('Juan');
console.log(user, user2)