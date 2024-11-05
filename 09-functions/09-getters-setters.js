const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    get nombreCompleto(){ // usando get se puede acceder a la propiedad como si fuera un atributo
        return `${usuario.nombre} ${usuario.apellido}`
    },
    set nombreCompleto(value){
        const [nombre, apellido] = value.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(usuario.nombreCompleto); // Juan Perez
usuario.nombreCompleto = 'Maria Lopez';
console.log(usuario.nombreCompleto); // Maria Lopez