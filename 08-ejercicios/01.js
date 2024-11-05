function paraAbsoluto(arr){
    return arr.map(val => Math.abs(val))
}

const ns = [-2, 3, 5, -15];

const res = paraAbsoluto(ns);
console.log(res)