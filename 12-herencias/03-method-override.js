function getProto(proto){
    return Object.getPrototypeOf(proto)
}

function Entidad(){}

Entidad.prototype.save = function(){
    console.log('Guardando desde entidad...')
}

function User(){}

// Estamos haciendo override y al buscar el metodo en los prototypes
// lo encontrara primero en User y no escalara hasta Entidad
User.prototype.save = function(){
    console.log("Guardando desde User")
}
Object.setPrototypeOf(User.prototype, Entidad.prototype)
const u = new User();
u.save()



console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save());// Esto es para llamar a una del padre

