function User(){
    this.name = "Hola Mundo"
}

function Product(){
    this.name = "Leche"
}

function Entidad(){}
Entidad.prototype.save = function(){
    console.log("Guardando", this.name)
}
Entidad.prototype.validate = function(){
    console.log("Validando", this.name)
}

//1 
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;// Esto es para aplicar el constructor de User y no el de Identidad
// User.prototype = Object.create(Entidad.prototype)
// User.prototype.constructor= User;


// ES6
Object.setPrototypeOf(User.prototype, Entidad.prototype)
Object.setPrototypeOf(Product.prototype, Entidad.prototype)

const user1 = new User();
console.log(user1)