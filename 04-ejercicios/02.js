function nombreResolucion(ancho , alto){
    if(ancho >= 7680 && alto >= 4320){
        return "8K";
    }else if(ancho >= 3840 && alto >= 2160){
        return "4K";
    } else if(ancho >= 1920 && alto >= 1080){
        return "FHD";
    } else if(ancho >= 1280 && alto >= 720){
        return "HD";
    } else if(ancho >= 854 && alto >= 480){
        return "480p";
    } else {
        return false;
    }
    
}

let res = nombreResolucion(3840, 2160);
console.log(res); 