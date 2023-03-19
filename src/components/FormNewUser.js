import { nuevoUser } from "../apiManager/api";
import { useNavigate } from "react-router-dom";

const FormNewUser = () => {
    const navigate = useNavigate();
    const handlerSubmit = async (e) => {
        e.preventDefault(); 
        const datosDelNuevoUsuario = {
            email : document.getElementById("email").value,
            contrasena : document.getElementById("contrasena").value,
            nombre : document.getElementById("nombre").value,
            direccion : document.getElementById("direccion").value,
            foto : document.getElementById("foto").value,
            numero : document.getElementById("numero").value,
            edad : document.getElementById("edad").value,
        }
        const respuesta = await nuevoUser(datosDelNuevoUsuario);
        if (respuesta.data.message == "Usuario existente") {
            alert("Ese usuaio ya existe")
        }else{
            alert("Creacion de usuario exitosa")
            document.getElementById("email").value = "";
            document.getElementById("contrasena").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("direccion").value = "";
            document.getElementById("foto").value = "";
            document.getElementById("numero").value = "";
            document.getElementById("edad").value = ""; 
            navigate("/inicioDeSesion");
        }
    } 
    return(
        <section className="SectionFormNewUser">
            <h2 className="titleH1">Registro</h2>
            <form className="form" id="formulario" onSubmit={handlerSubmit}>
                <ul className="form__ul">
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="email">Email:</label>
                        <input className="form__ul__li__input" type="text" id="email" name="email" required />
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="contrasena">Contrasena:</label>
                        <input className="form__ul__li__input" type="text" id="contrasena" name="contrasena" required />
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="nombre">Nombre:</label>
                        <input className="form__ul__li__input" type="text" id="nombre" name="nombre" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="direccion">Direccion:</label>
                        <input className="form__ul__li__input" type="text" id="direccion" name="direccion" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="foto">Foto:</label>
                        <input className="form__ul__li__input" type="text" id="foto" name="foto" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="numero">Numero:</label>
                        <input className="form__ul__li__input" type="number" id="numero" name="numero" required/>
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="edad">Edad:</label>
                        <input className="form__ul__li__input" type="number" id="edad" name="edad" required/>
                    </li>
                </ul>
                <input type="submit"/>
            </form>
        </section>
    )
}

export default FormNewUser;