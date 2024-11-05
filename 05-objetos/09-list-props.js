const punto = {
    x: 1,
    y: 2,
    z: 7,
    dibujar() {
        console.log('Dibujando...')
    }
}

// delete punto.dibujar
// Esto es para ver si un objeto tiene una propiedad
if('dibujar' in punto){
    punto.dibujar() 
}

console.log(Object.keys(punto)) // ['x', 'y', 'z']
for(let key of Object.keys(punto)){
    console.log(key, punto[key])
}

for(let entry of Object.entries(punto)){
    console.log(entry)
}

// Esta funcionalidad es relativamente nueva
for(let llave in punto){
    console.log(llave, punto[llave])
}



