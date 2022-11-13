import "./Productos.scss"
import ProductoTabla from "../ProductosTabla/ProductosTabla";
import FormNewProduct from "../FormNewProduct/FormNewProduct";
import { WebsocketContextProvide } from "../../context/WebsocketContext";
import Chat from "../Chat/Chat";


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