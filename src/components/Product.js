

const Product = ({producto}) => {
    return(
        <div className="sectionProductos__container">
            <div className="unProducto">
                <h2 className="unProducto__title">{producto.name}</h2>
                <div className="unProducto__contenedorImg">
                    <img className="unProducto__contenedorImg__img" src={producto.img} alt=""/>
                </div>
                <p className="unProducto__price">{producto.price}$</p>
            </div>
        </div>

    )
}

export default Product;