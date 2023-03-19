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

    const finalizarCompraFun = async () => {
        const resp = await finalizarCompra();
        console.log("respuest");
        console.log(resp);
    }

    useEffect(()=>{
        const obtenerCarrito = async () => {
            const resp = await getCarrito();
            console.log(resp);
            if(resp.data.msj){
                setMensaje(resp.data.msj);
            }
            const respuestaAdaptada = createAdaptedCarrito(resp)
            console.log("res");
            console.log(respuestaAdaptada);
            setCarrito(respuestaAdaptada)
            console.log(carrito);
            let suma = 0
            console.log("Buenos dias");
            carrito.map(item => {
                console.log("ho00ola");
                setTotal(total + (item.cantidad * item.precio))
                suma += (item.cantidad * item.precio)
                console.log(suma);
            })
            
        }
        obtenerCarrito()
    },[]);
    
    return(
        <section className="sectionCarrito">
            <h1>Carrito</h1>
            <div className="listCarrito">
                {carrito.length > 0 ? carrito.map(item => <CarritoDetail  key={item.id} datos={item} />): <p>{mensaje}</p>}
                <p>EL total es: {total}</p>
                <button onClick={() => finalizarCompraFun()}>Finalizar compra</button>
            </div>
        </section>
    )
}

export default Carrito;