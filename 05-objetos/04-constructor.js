function Usuario(){
    this.id = 1;
    this.recuperarClave  = function(){// metodo es una funcion que fue asignada a una propiedad de un objeto
        console.log('Recuperando clave');
    }
}

let user = new Usuario();
// cuando usamos la palabra new, se crea un nuevo objeto vacio 
// Despues "this" hace referencia a ese objeto vacio
// se ejecuta el codigo de la funcion Usuario 
// se retorna el objeto que se creo en el paso 1
console.log(user); // undefined