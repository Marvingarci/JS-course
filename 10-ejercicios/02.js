const obj = {
    nombre: 'Marvin'
}

function extender(usuario){
    // usuario.login = ()=>{
    //     console.log(`Logueando usuario ${usuario.nombre}`)
    // }
    // usuario.logout = () =>{
    //     console.log(`Cerrando Sesion ${usuario.nombre}`)
    // }
    // return usuario
    const metodos = {
        login: ()=>{
            console.log(`Logueando usuario ${usuario.nombre}`)
        },
        logout: () =>{
            console.log(`Cerrando Sesion ${usuario.nombre}`)
        }
    }

    return Object.assign(usuario, metodos);

}

let usuario = extender(obj)

console.log(usuario)
usuario.login()

