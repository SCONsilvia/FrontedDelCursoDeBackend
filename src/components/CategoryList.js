
import { getAllCategorias } from "../apiManager/api";
import { useEffect, useState } from 'react';
import { createAdaptedCategoriaList, createAdaptedProductList } from "../adapter/adapter";
import Category from "./Category";

const CategorysList = () => {
    const [categorys, setcategorys] = useState([]);
    const [mensaje, setMensaje] = useState("");

    useEffect(()=>{
        const allCategorysAsync = async () =>{
            setMensaje("cargando");
            const respuesta = await getAllCategorias();
            if(respuesta.status){
                const respuestaAdaptada = createAdaptedCategoriaList(respuesta.data);
                setcategorys(respuestaAdaptada);
                setMensaje("")
            }else{
                return <p>Acaba de ocurrir un error</p>
            }
            setMensaje("")
        }
        allCategorysAsync();
    },[]);
    
    return(
        <>  
            <Category category={{id:"all",name:"todos"}}></Category>
            {categorys.length > 0 ? categorys.map(item =><Category category={item}></Category> ): <p>{mensaje}</p>}
        </>
    )
}

export default CategorysList;