let arr = [2, 5, 7, 15, -5, -100, 55];

function getManorMayor(array){
    // this is one solution
    // array.sort((a, b) => a - b);
    // return [array[0], array[array.length -1]]

    // this is more performance
    let menor = array[0];
    let mayor = array[0]

    for(let num of array){
        menor = menor < num ? menor : num;
        mayor = mayor > num ? mayor : num;
    }
    return [menor, mayor]
}

let res = getManorMayor(arr);
console.log(res); 

