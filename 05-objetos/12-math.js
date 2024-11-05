console.log(
    Math.PI,
    Math.abs(-5),// Valor absoluto
    Math.round(5.4),// Redondea al entero más cercano (5.4 -> 5, 5.5 -> 6)
    Math.floor(5.9),// Redondea hacia abajo (5.9 -> 5)
    Math.ceil(5.1),// Redondea hacia arriba (5.1 -> 6)
    Math.pow(2, 3),// 2^3 = 8
    Math.sqrt(9),// Raíz cuadrada de 9 = 3
)


console.log(Math.random())// Número aleatorio entre 0 y 1

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10))// Número aleatorio entre 1 y 10