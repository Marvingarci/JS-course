// Encapsulation

const user = {
    nombre: "Marvin",
    apellido: "Garcia",
    getNombreCompleto(){
        return [this.nombre+" "+this.apellido]
    }
}
console.log(user.getNombreCompleto())

// Abstraccion= We dont need to know the details on how it is implementation, only exposes what we need to know
// let user = new User();
// user.changePassword('NewPass');
// user.save()


// Heritage: 
// User => id, nombre, guardar()
// Restaurante => id, nombre, guardar()
// Motociclista => id, nombre, guardar()
// ***** Lo mismo en los 3 *****
// Se puede crear un clase base y despues heredarla 

// En JS a diferencia que en otros languajes, no se usan Class para crear Herencias, se usa FC(Funciones constructoras)

// // Poliforms
// function validaEntidad(entidad){

// }



