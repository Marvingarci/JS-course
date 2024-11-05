let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr){
   let result = 0
    for(let num of arr){
        num > 0 && result++ 
    }  
    return result
}

let res = cuantosPositivos(array);
console.log(res); 
