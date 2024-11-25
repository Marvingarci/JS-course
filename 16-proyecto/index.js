let serialize = target =>{
    return Array.from(target.elements).reduce((acc, el)=>{
        if(!el.name) return acc;
        acc[el.name] = el.value;
        return acc
    }, {})
}

class User {
    static #url = 'https://jsonplaceholder.typicode.com/users';
    static #users = []
    static #ul = document.createElement('ul');
    static #form = document.createElement('form');
    static #initialValues = {
        name: '',
        email: ''
    }

    constructor(data){
        this.name = data.name
        this.email = data.email
    }

    static async getAllUser(){
        try{
            const response = await fetch(this.#url);
            if(!response.ok) throw response;
            this.#users = await response.json();
            return this.#users;
        }catch(error){
            console.error(error);
        }
    }

    static render(){
        let users = this.#users;
        users.forEach(user => {
            this.#ul.appendChild(this.renderUser(user));
        });
        return this.#ul;
    }

    static renderUser(user){
        let li = document.createElement('li');
        li.innerText = user.name;
        return li
    }

    static onSubmit(e){
        e.preventDefault();
        let data = serialize(e.target)
        let user = new User(data);
        const errors = user.validate();
        if(Object.keys(errors).length){
            this.#form.innerHTML = this.formHTML(
                {data, errors}
            )
            return;
        }

        user.save();
    }

    save(){
        return User.save(this)
    }

    static async save(user){
        try{
            const response = await fetch(this.#url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},  
                body: JSON.stringify(user),
            });

            const data = await response.json();
            this.#users.unshift(data);
            this.#ul.prepend(this.renderUser(data));
        }catch(e){
            console.log(e);

        }

    }

    validate(){
        let errors = {};
        if(!this.name) errors.name = 'El nombre es obligatorio';
        if(!this.email) errors.email = 'El email es obligatorio';
        return errors;
    }

    static formHTML({data = {}, errors = {}}){
        return `
            <div>
                <label>Nombre: </label>
                <input type="text" name="name" value=${data.name}>
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido: </label>
                <input type="text" name="email" value=${data.email}>
                ${errors.email || ''}
            </div>
            <input type="submit" />
        `;
    }

    static renderForm(){
        this.#form.onsubmit =  this.onSubmit.bind(this);
        this.#form.innerHTML = this.formHTML({
            data: this.#initialValues
        });

        return this.#form;
    }
}


async function main(){
    const users = await User.getAllUser();
    const template  = User.render();
    const form = User.renderForm();
    document.body.insertAdjacentElement('afterbegin', template);
    document.body.insertAdjacentElement('afterbegin', form);

    console.log(template);
}

main()