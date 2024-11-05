const config = {
    url: 'https://platzi.com',
    dirrecion : {
        calle: 'cra 1',
        ciudad: 'Bogota',
    }
}

function webserver({url, dirrecion: {ciudad}}) { 
    // const {url} = config
    return ciudad
}

console.log(webserver(config))

const configArr = [
    'https://platzi.com',
    145,
    80
]

function webserverArr([url, ...rest]) {// tambien podemos usar rest dentro de array para capturar los demas elementos
    console.log(url, rest)
}

webserverArr(configArr)
