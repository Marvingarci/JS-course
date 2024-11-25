// function User(name){
//     this.name = name
//     this.instancia = function(){}
// }

// User.prototype.login = function(){
//     console.log("Logueando")
// }

// Vamos a implementar esto mismo con Class
// Classes son sugar syntax, escribes algo que al final se convierte en lo que esta arriba
// Con respecto al hoisting de las clases, estas no se llevan al principio de la inicializacion como las funciones
// por lo cual si quieres instanciar una clase antes de declararla te arrojara un error
class User{

    constructor(name){
        this.name = name// esta variable y
        this.instancia = function(){}// esta fuction seran parte de la instancia o objeto en cuestion => usr
    }
    // dentro de las clases no se pueden declarar var, let o const
    activo = true// esta y 
    logout = ()=>{// este metodo se asigna a la instancia porque son variables
        console.log("Logout")
    }

    login(){// en cambio este es funcion y es declarado fuera del constructor y sin el this, sera parte del prototype
        console.log("Hola mundo")
    }

}
const usr = new User("Marvin")
console.log(usr)