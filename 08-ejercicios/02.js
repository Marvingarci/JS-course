const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id: 12},
    ['lala']
]


// numeros, string, objetos
function divideByType(arr){
    // One solution
    // let numeros = []
    // let objects = []
    // let strings = []
    // arr.forEach(element => {
    //     switch(typeof element){
    //         case 'string':
    //             strings.push(element);
    //             break
    //         case 'object':
    //             objects.push(element);
    //             break;
    //         case 'number':
    //             numeros.push(element)
    //         default:
    //             null
    //     }
    // });
    // return {numeros, objects, strings}

    // Second solution
    return {
        numeros: arr.filter(a => typeof a === 'number') ,
        objects: arr.filter(a => typeof a === 'object') ,
        strings: arr.filter(a => typeof a === 'string') ,
    }
}


const res = divideByType(miArray);
console.log(res)