let array = [
    {
        id: 1,
        name: "Luis",
    },
    {
        id: 2,
        name: "Jorge",
    },
    {
        id: 3,
        name: "Cris",
    }
]

// Expected Output
let pares = [
    [1, {id: 1, name: "Luis"}],
    [2, {id: 2, name: "Jorge"}],
    [3, {id: 3, name: "Cris"}],
]

// Solution 1
// function toPairs(arr){
//     return arr.reduce((acc, actual) =>{
//         return [...acc, [actual.id, actual]]
//     }, [])
// }

function toPairs(arr){
    let pairs = [];
    for(let idx in arr){
        pairs[idx] = [arr[idx].id, arr[idx]]
    }
    return pairs
}

let res = toPairs(array);
console.log(res); 