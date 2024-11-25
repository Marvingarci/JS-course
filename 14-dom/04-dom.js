let el = document.createElement('p')
el.innerText = "Elemento Creado"

// Append puede apender teto y nodos
document.body.append(el);// append es para agregarlo el final

el.remove()

document.body.prepend(el);// prepend es para agregarlo al inicio

// Las referencias a los elementos es unica por lo cual no se puede agregar en varios lados el mismo elemento
// Lo que va a pasar es que tomara el ultimo 

let div = document.createElement('div')

div.innerText = "Soy un texto"

// Para remplazar elemento
el.replaceWith(div);

document.body.replaceChild(el, div);
document.body.removeChild(el)
document.body.appendChild(el)// Este a diferencia de append, solo recibe child

document.body.insertBefore(div, el)// Se inserta el elemento despues de otro

document.body.insertAdjacentElement('beforebegin', div)// antes de la apertura de la <body>
document.body.insertAdjacentElement('afterbegin', div)// despues de la apertura de la <body>
document.body.insertAdjacentElement('beforeend', div)// antes de la clausura de </body>
document.body.insertAdjacentElement('afterend', div)// despues de la clausura de </body>


// document.body.insertAdjacentElement('afterbegin', '<h1></h1>')
// document.body.insertAdjacentText('afterbegin', 'text only')



