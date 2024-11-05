// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr = [];

//This is not recommended because it can cause confusion and bugs
// let arr = [1,2];
// let arr2 = arr;
// arr = [];
// console.log(arr2, arr); // [1,2] []

// let arr = [1, 2];
// arr.length = 0;
// console.log(arr); // []

let arr = [1, 2];
// arr.splice(0, arr.length);
// console.log(arr); // []

while(arr.length) {
    arr.pop();
} 
console.log(arr); // []


