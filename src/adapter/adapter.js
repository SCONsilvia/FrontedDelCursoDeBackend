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
        email : obj.user.email,
        mensaje : obj.mensaje,
        fecha: obj.timestamps
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

export const createAdaptedUserFromApi = (obj) => {

    const userAdapted = {
        nombre: obj.nombre,
        email : obj.email,
        imagen : obj.foto,
        direccion: obj.direccion,
        numeroDeTelefono : obj.numero,
        edad : obj.edad,
        admin : obj.admin,
    }

    return userAdapted;
}

export const createAdaptedUser = (obj) => {
    return createAdaptedUserFromApi(obj);
}

export const createAdaptedCarritoObj = (obj) => {

    const productAdapted = {
        id : obj.id,
        nombre: obj.nombre,
        precio : obj.precio,
        img : obj.foto,
        stock: obj.stock,
        cantidad: obj.cantidad
    }

    return productAdapted;
}

export const createAdaptedCarrito = (obj) => {
    return obj.data.data.productos.map(item =>createAdaptedCarritoObj(item));
}