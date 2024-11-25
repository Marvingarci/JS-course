function Entidad(entidad){
    this.id = Math.random().toString('20');
    this.entidad = entidad
}

function User(){
    Entidad.call(this, "Marvin")// Esto asigna en Entidad el contexto de User
    this.attrs ={
        name: 'Jorge',
        email: "@io"
    }
}

const u = new User()
console.log(u)





