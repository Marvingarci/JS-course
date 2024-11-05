const suma  = (a, b, ...rest) =>{// rest es un array con los argumentos que no se asignaron a los parámetros a y b, y tiene que ser siempre el ultimo
    console.log(rest)
}
suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // [3, 4, 5, 6, 7, 8, 9, 10]


const logMSG = (desc, ...msgs) => {
    for(let msg of msgs){
        console.log(`${desc}: ${msg}`)
    }   
}

// logMSG('Error', 'Servidor Down', 'Memory lak', '', 'Error 4', 'Error 5')
let mesasges = ['Servidor Down', 'Memory lak', '', 'Error 4', 'Error 5']
logMSG('Error', ...mesasges, 'Otro Error') // Error: Servidor Down, Error: Memory lak, Error: , Error: Error 4, Error: Error 5