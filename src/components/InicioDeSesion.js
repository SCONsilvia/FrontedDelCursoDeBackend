import { InicioDeSesionback } from "../apiManager/api";
import { useNavigate } from "react-router-dom";

const InicioDeSesion = () => {
    const navigate = useNavigate();
    const handlerSubmit = async (e) => {
        e.preventDefault();
        const datosUser = {
            email : document.getElementById("nombre").value,
            contrasena : document.getElementById("contrasena").value,
        }

        const resultado = await InicioDeSesionback(datosUser)

        if (resultado.status === true){
            console.log(resultado)
            console.log("fsdhfdsghffhdsgdfhjgdshgjfsd")
            navigate("/User");
        }else{
            console.log(resultado);
        }
        document.getElementById("nombre").value = "";
        document.getElementById("contrasena").value = "";
    }

    return(
        <section>
            <h1>InicoDeSesion</h1>
            <form className="form" id="formulario" onSubmit={handlerSubmit}>
                <ul className="form__ul">
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="nombre">Correo:</label>
                        <input className="form__ul__li__input" type="text" id="nombre" name="nombre" required />
                    </li>
                    <li className="form__ul__li">
                        <label className="form__ul__li__label" htmlFor="contrasena">Contrasena:</label>
                        <input className="form__ul__li__input" type="text" id="contrasena" name="contrasena" required />
                    </li>
                </ul>
                <input type="submit"/>
            </form>
        </section>

    )
}

export default InicioDeSesion;