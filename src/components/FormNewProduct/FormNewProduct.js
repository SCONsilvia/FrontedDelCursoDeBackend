import "./FormNewProduct.scss"
import { postProducto } from "../../apiManager/api";

const FormNewProduct = () => {
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
        postProducto(datosDelNuevoProducto)
        console.log(datosDelNuevoProducto);
    }
    return(
        <section className="sectionForm">
            <h2 className="titleH1">Agregar producto</h2>
            <form className="form" id="formulario">
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
                <button className="form__button" onClick={handlerSubmit}>Enviar</button>
            </form>
        </section>
    )
}

export default FormNewProduct;