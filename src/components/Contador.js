import { useState } from "react";
import { infoDeInicioDeSesion } from "../apiManager/api";
import { postCarrito } from "../apiManager/api";

const ItemCount = ({initial=1, stock, id}) => {
    const [count, setCount] = useState(initial);

    const add = (sum) => {
        setCount(count+sum);
    }

    const agregarAlCarrito = async (cantidad) => {
        const respuesta = await infoDeInicioDeSesion();
        if (respuesta.status == false) {
            alert("Tenes que loguearte antes")
        }else{
            const data = {
                idProducto : id,
                cantidad, cantidad
            }
            const resp = await postCarrito(data);
            if(resp.status){
                alert("listo");
            }else{
                alert("paso algo")
            }
        }
    } 
    
    return(
        <div className="itemContentCount">
            {stock === 0 ? <p>No hay stock</p> : 
            <>
            <div className="itemCount">
                <button className="itemCount__button" onClick={() => add(-1)} disabled={count === 1}><p>menos</p></button>
                <p className="itemCount__count">{count}</p>
                <button className="itemCount__button" onClick={() => add(1)} disabled={count === stock}><p>mas</p></button>
            </div>
            <button className="buttonAdd" onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
            </>
            }
        </div>
    )
}

export default ItemCount;