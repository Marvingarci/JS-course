const punto = {
    x: 10, 
    y: 15
}
// Assing crea un clon del objeto o también se puede agregar propiedades
Object.assign(punto, {z: 20})
console.log(punto)// { x: 10, y: 15, z: 20 }

// IMPORTANTE: Object.assign no clona el objeto, solo crea una referencia
// Para clonar un objeto se puede hacer de la siguiente manera
// Se crea un objeto vacío y se le asignan las propiedades del objeto a clonar

// Si queremos clonar y no solo referencia, si o si debemos pasarle un objeto vacío como primer parámetro
// Si no, se referencia el objeto original
//const reference = Object.assign( punto, {y: 20})// Este codigo referencia el objeto original
const clonePunto = Object.assign({}, punto) // Este código clona el objeto
clonePunto.x = 20

console.log(punto)// { x: 10, y: 15, z: 20 }
console.log(clonePunto)// { x: 20, y: 20, z: 20 }


// Otra forma de clonar un objeto es con el operador spread
const clonePunto2 = {...punto}
clonePunto2.x = 30 // Modificamos la propiedad x del objeto clonado
console.log(clonePunto2)// { x: 30, y: 15, z: 20 }

