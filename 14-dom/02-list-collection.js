//
let list = document.querySelectorAll('p'); // NodeList
let collection = document.getElementsByTagName('p'); // HTMLCollection

let item1 =  collection.namedItem('chanchito'); // podemos buscar con la propiedad name

let item2 = collection[0]; // podemos buscar por indice 
let item3 = collection.item(0); // asi tambien podemos buscar por indice    

// HTMLCollection no tiene metodo para iterar
// pero si se puede iterar con for while

// for (let el of collection) {
//     console.log(el)
// }

// otra forma
//Array.from(collection).forEach(el => console.log(el)) // con este nos muesta el objeto

//otra forma 
// [...collection].forEach(el => console.log(el)) // con este nos muestra el elemento

// NodeList

// let item4 = list.item(3);
// let item5 = list[3];

// Nodelist si tiene metodo forEach
// list.forEach(el => console.log(el));

// entries, keys, values

// let entries = list.values();
// while(!entries.next().done){
//     console.log(entries.next())
// }
// let keys = list.keys();
// let values = list.values()
// console.log(entries)


[...list].forEach(el => console.log(el))



