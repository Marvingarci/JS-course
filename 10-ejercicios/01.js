const obj = {
    nombre: 'Marvin'
}

function Extender(){
    this.login = ()=>{
        console.log(`Logueando usuario ${this.nombre}`)
    }
    this.logout = () =>{
        console.log(`Cerrando Sesion ${this.nombre}`)
    }
}

Extender.call(obj)
obj.login()
obj.logout()

