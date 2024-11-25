const usuario = {
    nombre: "Nicolas",
    ciudadanias: ['Honduras', "Colombia"],
    mostrarCiudadanias(){
        // Usar arrow function no tienen un contexto, por lo cual podemos accedder a variables superiores
        // Si le pasamos un function normal al forEach, al intentar acceder a nombre dara un reference error
        this.ciudadanias.forEach(ciu => console.log(this.nombre, ciu))
    }

}

usuario.mostrarCiudadanias()