const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    {id: 15},
    ['lala']
]


function divideByTypeWithReduce(arr){
    return {
        numeros: arr.reduce((acc, el)=> typeof el === 'number'? [...acc, el] : acc ,[]),
        strings: arr.reduce((acc, el)=> typeof el === 'string'? [...acc, el] : acc ,[]),
        object: arr.reduce((acc, el)=> typeof el === 'object'? [...acc, el] : acc ,[]),
        boolean: arr.reduce((acc, el)=> typeof el === 'boolean'? [...acc, el] : acc ,[]),
    }
}


const res = divideByTypeWithReduce(miArray);
console.log(res)