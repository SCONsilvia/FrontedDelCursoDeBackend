import { WebsocketContext } from "../context/WebsocketContext";
import { useContext, useState, useEffect } from "react";
import { getAllCategorias } from "../apiManager/api";
import { createAdaptedCategoriaList } from "../adapter/adapter";

const FormNewProduct = () => {
    const {crearNuevoProducto} = useContext(WebsocketContext);
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(document.getElementById("categoria").value)
        const datosDelNuevoProducto = {
            nombre : document.getElementById("titulo").value,
            precio : document.getElementById("precio").value,
            foto : document.getElementById("img").value,
            descripcion : document.getElementById("descripcion").value,
            codigo : document.getElementById("codigo").value,
            stock : document.getElementById("stock").value,
            categoryId : document.getElementById("categoria").value,
        }
        crearNuevoProducto(datosDelNuevoProducto);

        document.getElementById("titulo").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("img").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("codigo").value = "";
        document.getElementById("stock").value = "";
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(()=>{
        setLoading(true);
        const funcion = async () => {
            const respuesta = await getAllCategorias();
            if (respuesta.status){
                const respuestaAdaptada = createAdaptedCategoriaList(respuesta.data);
                setData(respuestaAdaptada);
            }else{
                setError(true)
            }
            setLoading(false);
        }
        funcion();
        
    },[])



    return(
        <section className="FormNewProduct__sectionForm">
            <h2 className="titleH1">Agregar producto</h2>
            <form className="form" id="formulario" onSubmit={handlerSubmit}>
                <ul className="form__ul">
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="titulo">Titulo:</label>
                        <input className="form__ul__li__input" type="text" id="titulo" name="nombre" required />
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="precio">Precio:</label>
                        <input className="form__ul__li__input" type="number" id="precio" name="precio" required />
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="img">thumbnail:</label>
                        <input className="form__ul__li__input" type="text" id="img" name="foto" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="descripcion">descripcion:</label>
                        <input className="form__ul__li__input" type="text" id="descripcion" name="descripcion" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="codigo">codigo:</label>
                        <input className="form__ul__li__input" type="text" id="codigo" name="codigo" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="stock">stock:</label>
                        <input className="form__ul__li__input" type="number" id="stock" name="stock" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="categoria">categoria:</label>
                        <select id="categoria" name="categoria">
                        {data.length > 0 ? data.map(item => <option value={item.id}>{item.name}</option> ): null}
                        </select>
                    </li>
                </ul>
                <input type="submit"/>
            </form>
        </section>
    )
}

export default FormNewProduct;