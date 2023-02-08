
import ProductoTabla from "./ProductosTabla";
import FormNewProduct from "./FormNewProduct";
import { WebsocketContextProvide } from "../context/WebsocketContext";
import Chat from "./Chat";


const Productos = () => {
    return(
        <>
            <h1>Producs</h1>
            <WebsocketContextProvide>
                <FormNewProduct/>
                <ProductoTabla/>
                <Chat/>
            </WebsocketContextProvide>
        </>
    )
}

export default Productos;