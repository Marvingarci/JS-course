function configurarAPI(url = 'https://default.com' ){ // asi se asigna default
    // const defaultUrl = url || 'https://default.com' 
    return `${url}`
}

console.log(configurarAPI())

const config = {
    url: 'https://platzi.com',
}

function configurarAPI2({ url} = { url : 'https://default.com'} ){ // asi se asigna default
    return `${url}`
}

console.log(configurarAPI2(config))


