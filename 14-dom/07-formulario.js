let validate = data =>{
    let errors = {}
    if(!data.name) errors.name = 'Campo Obligatorio'
    if(!data.apellido) errors.apellido = 'Campo Obligatorio'
    return errors
}

let render = ({errors, data}) => {
    return `
        <form name='formulario'>
            <div>
                <label>Nombre:</label>
                <input name='name' value='${data.name}' />
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido:</label>
                <input name='apellido' value'${data.apellido}' />
                ${errors.apellido || ''}
            </div>
            <div><button>Enviar</button></div>
        </form>
    `
}



let initialValues = {
    name: '',
    apellido: ''
}
let form = document.createElement('form')
form.innerHTML = render({data: initialValues, errors: {}});

document.body.append(form)

form.addEventListener('submit', e =>{
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el)=>{
        if(!el.name) return acc
        acc[el.name] = el.value
        return acc
    }, {})
    console.log(data)

    const errors = validate(data);
    console.log(errors)

    if(Object.keys(errors).length > 0){
        let html = render({ errors, data})
        form.innerHTML = html
        return
    }

    // utilizar promesas o async para enviar los datos

})

