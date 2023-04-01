import { useContext, useState, useEffect } from "react";
import { postCategoria } from "../apiManager/api";

const FormNewCategory = () => {
    const [mensaje, setMensaje] = useState("");
    const handlerSubmit = async (e) => {
        e.preventDefault();
        setMensaje("Cargando")
        const datosDelNuevoCategoria = {
            nombre : document.getElementById("nombre").value,
            descripcion : document.getElementById("descripcion").value,
        }

        const respuesta = await postCategoria(datosDelNuevoCategoria);
        if (respuesta.status){
            setMensaje("Categoria creada con exito")
        }else{
            setMensaje("Ocurrio un error")
        }
        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
    }


    return(
        <section className="FormNewCategory__sectionForm">
            <h2 className="titleH1">Agregar Categoria</h2>
            <form className="form" id="formulario" onSubmit={handlerSubmit}>
                <ul className="form__ul">
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="titulo">Nombre:</label>
                        <input className="form__ul__li__input" type="text" id="nombre" name="nombre" required />
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="descripcion">descripcion:</label>
                        <input className="form__ul__li__input" type="text" id="descripcion" name="descripcion" required/>
                    </li>
                </ul>
                <input type="submit"/>
            </form>
            <p>{mensaje}</p>
        </section>
    )
}

export default FormNewCategory;