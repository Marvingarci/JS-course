
function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log("Recuperando Clave")
        }
    }
}

let user1 = crearUsuario('Nicolas', 'marvin.garcia@unah.hn')
let user2 = crearUsuario('Marvin', 'felipe@unah.hn')
let user3 = crearUsuario('Felipe', 'objects@unah.hn')

console.log(user1, user2, user3)