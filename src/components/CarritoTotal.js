import { getCarrito } from "../apiManager/api";
import { useEffect, useState } from 'react';
import CarritoDetail from "./CarritoDetail";
import { createAdaptedCarrito } from "../adapter/adapter";

const CarritoTotal = () => {
    const [carrito, setCarrito] = useState([]);
    const [mensaje, setMensaje] = useState([])


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
            carrito.map(item => {
                console.log(item);
            })
        }
        obtenerCarrito()
    },[]);
    
    return(
        <section className="sectionCarrito">
            <h1>Carrito</h1>
            <div className="listCarrito">
                {carrito.length > 0 ? carrito.map(item => <CarritoDetail  key={item.id} datos={item} />): <p>{mensaje}</p>}
                
            </div>
        </section>
    )
}

export default CarritoTotal;