// dentro de un objeto, This hace referencia al objeto que invoca la función donde se encuentra this
// Si this esta dentro de una funcion, this hace referencia al objeto window o global
// Se se usa new, this hace referencia al objeto que se esta creando


// Cuando this hace referencia al objeto que la encapsula
// const user = {
//     name: 'Juan',
//     logThis(){
//         console.log(this); // { name: 'Juan', login: [Function: login] }
//     }
// }
// user.logThis();
// user.logout = function logout(){ console.log('logout')}
// user.logThis();


// Cuando this hace referencia al objeto global
// function log(){
//     console.log(this);
// }

// log()


// Cuando usamos new, this hace referencia al objeto que se esta creando
function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola Mundo'); // Log { mensaje: 'Hola Mundo' }  

/**
 * Cuando se usa la palabra new hay 4 pasos:
 * 1. Se crea un objeto vacio
 * 2. Se le asigna el valor de this al objeto creado
 * 3. Se ejecuta la funcion
 * 4. Se retorna el objeto
 */

