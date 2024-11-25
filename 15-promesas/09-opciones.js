const url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        title: 'Mi Nota'
    }),
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer mitoken'
    }
})
.then(response =>{
    if(response.ok){
        return response.json()
    }
    return Promise.reject(response.status)
})
.then(data => console.log(data))