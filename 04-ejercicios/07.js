function precioCompleto(precio, impuesto){
    return precio *(1 + impuesto)
}

let res = precioCompleto(19.90, 0.15);
console.log(res); 