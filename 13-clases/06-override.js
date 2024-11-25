class Entidad{
    constructor(id){
        this.id = id
        this.created_at = new Date()
    }
    save(){
        console.log("Save desde Entidad")
    }
}

class User extends Entidad{
    constructor(name){
        super(1)
        this.name= name
    }

    save(){// Este metodo se ejectutara primero porque es el primero que encuentra en la cadena de prototipos
        super.save()// esto es para ejecutar el metodo save del padre(Entidad)
        console.log("Save desde User")
    }
}

const r = new User("Lexi");
r.save()

