function Select(){}
Select.prototype.render = function (){
    console.log("Renderizando Select");
}

function Checkbox(){}
Checkbox.prototype.render = function (){
    console.log("Renderizando CheckBox");
}

let components = [
    new Select(),
    new Checkbox()
]

components.forEach(c => c.render())