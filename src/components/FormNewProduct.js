import { WebsocketContext } from "../context/WebsocketContext";
import { useContext } from "react";

const FormNewProduct = () => {
    const {crearNuevoProducto} = useContext(WebsocketContext);
    const handlerSubmit = (e) => {
        e.preventDefault();
        const datosDelNuevoProducto = {
            nombre : document.getElementById("titulo").value,
            precio : document.getElementById("precio").value,
            foto : document.getElementById("img").value,
            descripcion : document.getElementById("descripcion").value,
            codigo : document.getElementById("codigo").value,
            stock : document.getElementById("stock").value,
        }
        crearNuevoProducto(datosDelNuevoProducto);

        document.getElementById("titulo").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("img").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("codigo").value = "";
        document.getElementById("stock").value = "";
    }
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
                </ul>
                <input type="submit"/>
            </form>
        </section>
    )
}

export default FormNewProduct;