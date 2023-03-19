import ProductDetail from "./ProductDetail";
import { getProduct } from "../apiManager/api";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { useState, useEffect } from "react";
import { createAdaptedProductFromApi } from "../adapter/adapter";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState();
    useEffect(()=>{
        setLoading(true);
        const funcion = async () => {
            const respuesta = await getProduct(productId);
            if (respuesta.status){
                const respuestaAdaptada = createAdaptedProductFromApi(respuesta.data.data);
                setData(respuestaAdaptada);
            }else{
                setError(true)
            }
            setLoading(false);
        }
        funcion();
        
    },[])

    if(error){
        return <p>Acaba de ocurrir un error</p>
    }

    return(
        <div>
            {data && data.hasOwnProperty("id")? <ProductDetail {...data}/> : (loading ? <p>Cargando Detalles</p> : <p>No se pudo cargar el detalle del producto</p>)}
        </div>
    )
}

export default ItemDetailContainer;