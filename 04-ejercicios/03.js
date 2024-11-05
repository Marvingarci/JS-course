function getByIdx(arr, idx) {
    if(idx >= arr.length || idx < 0){
        return "EL indice no es valido"
    }
    return arr[idx];
}

let res = getByIdx([1, 2, 3, 4, 5], -1);
console.log(res); 