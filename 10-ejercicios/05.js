function ordernar(texto, fn){
    let res = texto.replace(" ", "").split("").sort().join(""); 
    fn(res);
}

ordernar("Hola Mundo", console.log);