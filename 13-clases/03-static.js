class Restaurants{
    constructor(name){
        this.name = name
    }

    getTimeTable(){
        console.log("horario Restaurante")
    }

    static getRestaurant(id){ 
        return [
            new Restaurants('BBW'),
            new Restaurants('Asados'),
            new Restaurants('QUEE'),
        ]
    }
}
// Los metodos estaticos son aquellos que no es nesesario ser instanciado para acceder a ellos
// Son metodos que no pertenecen a la instancia(r) sino a clase Restaurants
const r = Restaurants.getRestaurant();
console.log(r)

const arr = new Array();
Array.isArray(arr);// isArray es un metodo estatico de la clase Array
Array.from()