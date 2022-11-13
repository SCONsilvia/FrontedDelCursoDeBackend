import "./ProductListDinamico.scss"
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { WebsocketContext } from "../../context/WebsocketContext";
import { createAdaptedProductArr } from "../../adapter/adapter";

const ProductListDinamico = ({Componente}) => {
    const {productosDinamico} = useContext(WebsocketContext);
    const [productosDinamicoParaArmaHtml, setProductosDinamicoParaArmaHtml] = useState([]);

    useEffect(()=>{
        const productoAdaptado = createAdaptedProductArr(productosDinamico);
        setProductosDinamicoParaArmaHtml(productoAdaptado);
    },[productosDinamico]);
    return(
        <>
            {productosDinamicoParaArmaHtml.length > 0 ? productosDinamicoParaArmaHtml.map(item => <Componente key={item.id} producto={item}/>): null}
        </>
    )
}

export default ProductListDinamico;