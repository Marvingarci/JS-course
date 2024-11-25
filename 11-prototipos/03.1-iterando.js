function User(){
    this.name = "Hola Mundo";
}

User.prototype.login = function (){
    console.log("Iniciando Sesion: ", this.name);
}

let user = new User();
// console.log(user)
for (let prop in user)
    if(!user.hasOwnProperty(prop))
    console.log(prop);


console.log(Object.keys(user))