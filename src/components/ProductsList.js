
import { allProducts } from "../apiManager/api";
import { useEffect, useState } from 'react';
import { createAdaptedProductList } from "../adapter/adapter";

import ProductListDinamico from "./ProductListDinamico";

const ProductsList = ({Componente, nombreDelComponente}) => {
    const [productos, setProductos] = useState([]);
    const [mensaje, setMensaje] = useState("");

    useEffect(()=>{
        const allProductsAsync = async () =>{
            setMensaje("cargando");
            const respuesta = await allProducts();
            if(respuesta.status){
                const respuestaAdaptada = createAdaptedProductList(respuesta.data);
                setProductos(respuestaAdaptada);
                setMensaje("")
            }else{
                return <p>Acaba de ocurrir un error</p>
            }
            setMensaje("")
        }
        allProductsAsync();
    },[]);
    
    return(
        <>
            {productos.length > 0 ? productos.map(item => <Componente key={item.id} producto={item}/>): <p>{mensaje}</p>}
            {nombreDelComponente === "ProductoTablaItem" ? <ProductListDinamico Componente={Componente}/> : null}
        </>
    )
}

export default ProductsList;