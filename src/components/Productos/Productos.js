import "./Productos.scss"
import ProductoTabla from "../ProductosTabla/ProductosTabla";
import FormNewProduct from "../FormNewProduct/FormNewProduct";
import Websocket from "../Websocket/Websocket";


const Productos = () => {
    return(
        <>
            <h1>Producs</h1>
            <Websocket/>
            <FormNewProduct/>
            <ProductoTabla/>
        </>
    )
}

export default Productos;