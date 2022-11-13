export const createAdaptedProductFromApi = (obj) => {

    const productAdapted = {
        id: obj.id,
        name : obj.nombre,
        img : obj.foto,
        price: obj.precio,
        description : obj.descripcion,
        category : obj.category,
        timestamp : obj.timestamp,
        code : obj.codigo,
        stock : obj.stock,
    }

    return productAdapted;
}

export const createAdaptedProductList = (obj) => {
    return obj.data.map(item =>createAdaptedProductFromApi(item));
}

export const createAdaptedProductArr = (obj) => {
    return obj.map(item =>createAdaptedProductFromApi(item));
}

export const createAdaptedChatFromApi = (obj) => {
    const chatAdapted = {
        id : obj.id,
        email : obj.email,
        mensaje : obj.mensaje,
        fecha: obj.fecha
    }

    if ("clase" in obj){
        chatAdapted.clase=obj.clase;
    }

    return chatAdapted;
}

export const createAdaptedChatList = (obj) => {
    return obj.data.map(item =>createAdaptedChatFromApi(item));
}

export const createAdaptedChatArr = (obj) => {
    return obj.map(item =>createAdaptedChatFromApi(item));
}