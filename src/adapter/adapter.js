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