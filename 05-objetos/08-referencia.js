let a = 1
let b = a

// en datos primitivos se crea una copia en memoria
b++
console.log(a)// 1
console.log(b)// 2

// En cambio en objetos se crea una referencia en memoria
// es decir, se apunta a la misma direccion de memoria
// por lo que si se modifica uno, se modifica el otro
let c = {}
let d = c

d.prop = 1
console.log(c)// { prop: 1 }
console.log(d)// { prop: 1 }  


// En el siguiente ejemplo se muestra que si se pasa un dato primitivo
// a una funcion, este no se modifica
let valor = 1
function suma(val){
    val++
}
suma(valor)
console.log(valor)// 1

// En cambio si se pasa un objeto a una funcion, este si se modifica
let obj = {valor: 1}
function sumar(o){ 
    o.valor++
}
sumar(obj)
console.log(obj.valor)// 2
