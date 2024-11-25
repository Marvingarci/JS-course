function suma(fn, ...rest){
    fn(rest.reduce((acc, el)=> acc+el, 0))
}

suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4);