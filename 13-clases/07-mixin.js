const Entidad = {
    save(){
        console.log("Save desde Entidad")
    }
}

class User{
    constructor(name){
        this.name= name
    }
}

Object.setPrototypeOf(User.prototype, Entidad);

const r = new User("Lexi");
r.save()

