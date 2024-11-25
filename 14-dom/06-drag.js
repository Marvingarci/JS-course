let id;
function createDropableArea(){
    let dropArea = document.createElement('div')
    dropArea.className = 'drop'
    dropArea.ondragenter = e => {
        e.target.style.background = 'yellow';
    }
    
    dropArea.ondragleave = e =>{
        e.target.style.background = '';
    }

    dropArea.ondragover = e =>{
        e.preventDefault()
    }

    dropArea.ondrop = e =>{
        e.target.appendChild(document.getElementById(id))
    }

    return dropArea
}
function createDragable() {
    let span = document.createElement('span')
    span.id = 'hola-mundo'
    span.innerText = "Arrastrable"
    span.draggable = true
    span.ondragstart = e => {
        id = e.target.id;
    }
    return span
}


let draggable = createDragable()
let dropArea1 = createDropableArea()
let dropArea2 = createDropableArea()

document.body.append(draggable)
document.body.append(dropArea1)
document.body.append(dropArea2)




