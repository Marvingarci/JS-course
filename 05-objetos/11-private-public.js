// Todo lo que esta con this es publico y accesible desde afuera
function Usuario(){
    let id = 1;
    this.name = 'Usuario';
    // Para convertir un método en privado se puede hacer de la siguiente manera
    let log = function(){
        console.log('Login');
    }
    this.guardar = function(){
        log()
        console.log('Guardando usuario');
    }
}

const usuario = new Usuario();
usuario.log = function(){console.log('Login modificado sin querer')};
usuario.guardar()