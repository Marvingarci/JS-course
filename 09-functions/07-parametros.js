function configurarAPI(url){
    const defaultUrl = url || 'https://default.com' 
    return `${defaultUrl}`
}

console.log(configurarAPI())