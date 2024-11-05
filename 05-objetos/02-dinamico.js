// No se puede cambiar el valor de user porq es const, 
// pero si podemos modificar sus propiedades
const user = {id: 1};
user.name = "Marvin"
user.guardar = function(){
    console.log("Guardando", user.name)
}

user.guardar()

delete user.name;
delete user.guardar;
console.log(user)

// Si queremos evitar que se modifiquen, agreguen o eliminen las propiedades de un objeto
// podemos usar Object.freeze
const user1 = Object.freeze({id: 1})
user1.name
console.log(user1)

// Si queremos que se modifiquen las propiedades pero no se puedan agregar o eliminar
// podemos usar Object.seal
const user2 = Object.seal({id: 1})
user2.name = "Marvin"
user.id = 2
console.log(user2)

