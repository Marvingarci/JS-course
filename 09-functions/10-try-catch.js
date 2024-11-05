function sumarTodo(arr){
    console.log(typeof arr);// we cannot use typeof to check if arr is an array
    // because typeof returns 'object' for arrays
    // you need to use Array.isArray(arr) to check if arr is an array
    if(!Array.isArray(arr)){
        throw new Error('Error: arr.reduce is not a function');
    }
    return arr.reduce((acc, el)=> {
        if(typeof el !== 'number' || Number.isNaN(el)){
            throw new Error('Error: Not all elements are numbers');
        }
    }, 0);
}

// console.log(sumarTodo([1,2,3,4,5])); // 15

// Try Catch avoid code execution stop
try{
    console.log(sumarTodo([1,2,NaN,'Hola Mundo'])); // Error: arr.reduce is not a function
}catch(e){
    console.error(e);
}

// If we use try catch, the code will continue executing
console.log('Esto se sigue ejecutando'); // Esto se sigue ejecutando