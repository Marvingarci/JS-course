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
}

const r = new User("Lexi");
r.save()

