function Usuario(name){
    this.name = name;
}

console.log(Usuario.name)// Usuario
console.log(Usuario.length)// numero de argumentos que recibe la funcion

const U = Usuario // Esta haciendo referencia a la funcion Usuario
let user = new U('Juan') // este codio funciona igual que el de abajo
// let user = new Usuario('Juan')

function of(Fn, arg){
    return new Fn(arg)
}

let user1 = of(Usuario, 'Alexis');
console.log(user1.name) // Alexis

function returned(){
    return function(){
        console.log('Hola');
    }
}

let saludo = returned();
saludo(); // Hola
