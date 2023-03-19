import { eliminarItemDelCarrito } from "../apiManager/api";

const CarritoDetail = ({datos, actualizar, setActualizar}) => {
    const eliminar = async (id) => {
        const data = {
            idProducto: id
        }
        const resp = await eliminarItemDelCarrito(data);
        //window.location.reload();
        setActualizar(!actualizar)
    }
    return(
        <div className="ItemCarrito">
            <button className="XItemDelCarrito" onClick={() => eliminar(datos.id)}>X</button>
            <p>{datos.nombre}</p>
            <p>{datos.precio}</p>
            <p>{datos.cantidad}</p>
            <p>SubTotal {datos.cantidad * datos.precio}</p>
        </div>
    )
}

export default CarritoDetail;