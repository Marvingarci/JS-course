const url = 'https://jsonplaceholder.typicode.com/todos/a'

fetch(url)// Fetch siempre va a resolver 200, tenemos que manejar los errores
.then(response =>{
    if(response.ok){
        return response.json()
    }
    return Promise.reject(response.status)
})
.then(data => console.log(data))