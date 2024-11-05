let array = [
    [1, {name: "Luis"}],
    [2, {name: "Jorge"}],
    [3, {name: "Cris"}],
]

// expected output
let paresInversed = [
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

function toPairsInverse(arr){
    return arr.reduce((acc, actual)=> [...acc, {id: actual[0], name: actual[1].name}], [])
}

let res = toPairsInverse(array);
console.log(res); 