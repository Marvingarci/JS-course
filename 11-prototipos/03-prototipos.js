// Object es una funcion constructora de prototype

// let x = {};
// console.log(Object.getPrototypeOf(x))
// console.log(Object.getPrototypeOf(x) === Object.prototype)// true
// let y = new Object();

// console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)) // true
// // cuando accedemos al metodo de un prototipo, este se busca primero en el objeto que lo creo
// // Si no se encuentra escala a buscarlo mas arriba
// // tal cual para con el prototipo Object que tiene un metodo toString
// console.log(x.toString());

// // En JS, los prototipos son una cadena, si revisamos el prototype de un array
// // al final se conecta a otro prototipo padre Object

// console.log(Object.getPrototypeOf(''))

function User(){
    this.name = 'Hola Mundo'
    // Metodo de instancia
    this.logger = function (){
        console.log("Logueando")
        this.login()
    }
}

// Metodo de Prototipo
// Esto es para meter el metodo login, en el prototipo y no dentro del objeto User
User.prototype.login = function(){
        console.log('Iniciando Sesion', this.name)
        // this.logger()
    }

// El metodo toString lo estamos aggregando al prototype User, entonces sera el primer metodo toString que se encuentre y no seguira buscando mas arriba
User.prototype.toString = function (){
    console.log("Usuario:", this.name)
}

const user1 = new User();
const user2 = new User();


console.log(user1.toString())





