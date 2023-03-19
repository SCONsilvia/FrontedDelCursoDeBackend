import { getCarrito } from "../apiManager/api";
import { useEffect, useState } from 'react';
import CarritoDetail from "./CarritoDetail";
import { createAdaptedCarrito } from "../adapter/adapter";
import Button from "./Button";
import { finalizarCompra } from "../apiManager/api";

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [mensaje, setMensaje] = useState([]);
    const [total, setTotal] = useState(0);
    const [actualizar, setActualizar] = useState(true);

    const finalizarCompraFun = async () => {
        const resp = await finalizarCompra();
        //window.location.reload();
        setActualizar(!actualizar);
        setCarrito([]);
    }

    useEffect(()=>{
        const obtenerCarrito = async () => {
            const resp = await getCarrito();
            if(resp.data.msj){
                setMensaje(resp.data.msj);
                setCarrito([])
                setTotal(0)
            }else if(resp.data.data.productos.length == 0){
                setMensaje("carrito vacio");
                setCarrito([])
                setTotal(0)
            }else{
                const respuestaAdaptada = createAdaptedCarrito(resp);
                setCarrito(respuestaAdaptada);
                let suma = 0;
                respuestaAdaptada.map(item => {
                    suma += (item.cantidad * item.precio);
                })
                setTotal(suma);
            }
        }
        obtenerCarrito();
    },[actualizar]);
    
    return(
        <section className="sectionCarrito">
            <h1>Carrito</h1>
            <div className="listCarrito">
                {carrito.length > 0 ? carrito.map(item => <CarritoDetail  key={item.id} datos={item} actualizar={actualizar} setActualizar={setActualizar}/>): <p>{mensaje}</p>}
                {total > 0 ? <><p>EL total es: {total}</p>
                <button className="buttonCarrito" onClick={() => finalizarCompraFun()}>Finalizar compra</button></> : null}
            </div>
        </section>
    )
}

export default Carrito;