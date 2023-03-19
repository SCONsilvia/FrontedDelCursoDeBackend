import {Link} from "react-router-dom";

const Product = ({producto}) => {
    return(
        <Link to={`/detail/${producto.id}`}>
            <article className="unProducto">
                    <h2 className="unProducto__title">{producto.name}</h2>
                    <div className="unProducto__contenedorImg">
                        <img className="unProducto__contenedorImg__img" src={producto.img} alt={"Imagen de " + producto.name}/>
                    </div>
                    <p className="unProducto__price">{producto.price}$</p>
            </article>
        </Link>
    )
}

export default Product;
