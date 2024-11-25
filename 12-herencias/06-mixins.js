// Hay veces donde la herencia no llega a todos los casos en donde es mejor usar la composicion o reescribir codigo
let vuela = {
    vuela(){
        console.log('Volando')
    }
}

let nada = {
    nada(){
        console.log("Nadando")
    }
}

let bano = {
    bano(){
        console.log("Yendo al bano")
    }
}
// vuela, nada, camina, va al bano
function Pato(){
    this.name = "Pato"
}
Object.assign(Pato.prototype, bano, vuela, nada);

// nada, va al bano
function Pez(){}
Object.assign(Pez.prototype, nada, bano);
let p = new Pez()
console.log(p.prototype, p)

// vuela, no va al bano, ni camina ni va al bano
function Avion(){}

Object.assign(Avion.prototype, vuela)
console.log(Avion.prototype)