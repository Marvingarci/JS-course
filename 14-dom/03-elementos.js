let el = document.createElement('p')
// innerHTML interpreta el codigo html
el.innerHTML = 'Elemento Creado';// innerHTML inserta dentro de los tags => <p>Elemento Creado</p>
document.body.append(el);

// el.innerText = "<ul>Elemento Creado</ul>";// igual que innerHTML pero no interpreta codigo html, se copia tal cual
 el.innerHTML = "<ul>Elemento Creado</ul>";// igual que innerHTML pero no interpreta codigo html, se copia tal cual

el.style = 'background-color: tomato; font-weight: bold';
el.className = 'parrafo';
el.id = 'mi-parrafo';

// Custom property
el.setAttribute('mipropiedad', "mi property")

el.getAttribute('mipropiedad')
console.log(el.hasAttribute('mipropiedad'))









