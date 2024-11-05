// Spread operator is a new feature in ES6 that allows us to expand an iterable object into individual elements. It is used to split up array elements or object properties.

let arr1 = [1, 2];
let arr2 = [5, 6];


let arr3 = [...arr1, 3, 4, ...arr2];
console.log(arr3);// [1, 2, 3, 4, 5, 6]

// Spread operator can also be used to create a new array from an existing array.
let arr4 = [1, 2, 3];
let arr5 = [...arr4];
arr4.pop();
console.log(arr5, arr4);// [1, 2, 3]

