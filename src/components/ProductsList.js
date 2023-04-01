
import { allProducts,getProductsByCategoryId } from "../apiManager/api";
import { useEffect, useState } from 'react';
import { createAdaptedProductList } from "../adapter/adapter";

import ProductListDinamico from "./ProductListDinamico";

const ProductsList = ({Componente, nombreDelComponente, categoryId}) => {
    const [productos, setProductos] = useState([]);
    const [mensaje, setMensaje] = useState("");

    useEffect(()=>{
        const allProductsAsync = async (getProducts) =>{
            setMensaje("cargando");
            const respuesta = await getProducts();
            if(respuesta.status){
                const respuestaAdaptada = createAdaptedProductList(respuesta.data);
                setProductos(respuestaAdaptada);
                setMensaje("")
            }else{
                return <p>Acaba de ocurrir un error</p>
            }
            setMensaje("")
        }
        if (categoryId=="all"){
            allProductsAsync(allProducts);
        }else{
            const f = () => getProductsByCategoryId(categoryId)
            allProductsAsync(f);
        }
    },[]);
    
    return(
        <>
            {productos.length > 0 ? productos.map(item => <Componente key={item.id} producto={item}/>): <p>{mensaje}</p>}
            {nombreDelComponente === "ProductoTablaItem" ? <ProductListDinamico Componente={Componente}/> : null}
        </>
    )
}

export default ProductsList;