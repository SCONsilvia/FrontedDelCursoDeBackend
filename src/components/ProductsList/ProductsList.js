import "./ProductsList.scss"
import { allProducts } from "../../apiManager/api";
import { useEffect, useState } from 'react';
import { createAdaptedProductList } from "../../adapter/adapter";

const ProductsList = ({Componente}) => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const allProductsAsync = async () =>{
            const respuesta = await allProducts();
            if(respuesta.status){
                const respuestaAdaptada = createAdaptedProductList(respuesta.data);
                setProductos(respuestaAdaptada);
                console.log(respuestaAdaptada);
            }else{
                return <p>Acaba de ocurrir un error</p>
            }
        }
        allProductsAsync();
    },[]);
    
    return(
        <>
            {productos.length > 0 ? productos.map(item => <Componente key={item.id} producto={item}/>): <p>Cargando</p>}
        </>
    )
}

export default ProductsList;