let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button')
btn.innerText = "Enviar"
form.append(input)
form.append(btn)

document.body.append(form)

// eventos

form.onmouseenter = e => {
    console.log("Entra el mouse", e)
    form.style = "background-color: tomato"
}  

form.onmouseleave = e =>{
     console.log("Entra el mouse", e)
    form.style = "background-color: white"
}

input.onfocus = e => {
    console.log("Input con Focus", e)
}

input.onblur = e =>{
    console.log("Blur")
}

input.onchange = e =>{
    console.log("Valor cambia:", e.target.value)
}

btn.setAttribute('type', 'button')

// ambas son maneras para manejar el evento de click
// btn.onclick = e =>{
//     console.log("Boton Clickeado")
// }

btn.addEventListener('click', e => console.log(e))




