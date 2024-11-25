function saludar(...rest){
    console.log(this, rest)// Imprimira el objeto de window
}

// Call es para sustituir el this dentro de la funcion saludar para que no tome window como this
// saludar.call({propiedad: "Hola"}, 2, 3);


// Funciona igual que call pero este recibe los params como array
// saludar.apply({propiedad: "Hola"}, [2, 3])

// Funciona igual que los anteriores con la diferencia que este emite el contexto a una nueva variable
// Esta es la manera larga

// let newSaludar = saludar.bind({propiedad: 'Hola'});
// newSaludar(1, 5)

// Esta es la manera corta
saludar.bind({propiedad: 'Hola'})(1, 5);

// Si quisieramos ejecutarlo directamente en la funcion se puede asi
(function saludar(...rest){
    console.log(this, rest)// Imprimira el objeto de window
}).bind({propiedad: 'Hola'})(1, 5);


// Para arreglar la funtion de la leccion anterior y usar function normales se haria asu
const usuario = {
    nombre: "Nicolas",
    ciudadanias: ['Honduras', "Colombia"],
    mostrarCiudadanias(){
            this.ciudadanias.forEach(function(ciu){
                console.log(this.nombre, ciu)
            }.bind(this)// Aqui le estamos pasando el this de usuario, para que no tome windows como this
        )
    }

}

usuario.mostrarCiudadanias()
