
import ProductoTabla from "./ProductosTabla";
import FormNewProduct from "./FormNewProduct";
import { WebsocketContextProvide } from "../context/WebsocketContext";
import Chat from "./Chat";


const Productos = () => {
    return(
        <>
            <h1>Cosas</h1>
                <FormNewProduct/>
                <ProductoTabla/>

        </>
    )
}

export default Productos;