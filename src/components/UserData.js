import { useEffect, useState } from "react";
import { infoDeInicioDeSesion } from "../apiManager/api";
import { createAdaptedUser } from "../adapter/adapter";

const UserData = () => {
    const [email,setEmail] = useState("")
    const [nombre,setNombre] = useState("")
    const [imagen,setImagen] = useState("")
    useEffect(()=>{
        const funcion = async () => {
            const respuesta = await infoDeInicioDeSesion();
            if (respuesta.status){
                /* console.log(respuesta.data.dataUser); */
                const respuestaAdaptada = createAdaptedUser(respuesta.data.dataUser);
                /* console.log(respuestaAdaptada);
                console.log("aca");
                setR(respuesta.data.session.email)
                setVisita(respuesta.data.dataUser.nombre) */
                console.log(respuesta.data.dataUser);
                setEmail(respuestaAdaptada.email)
                setNombre(respuestaAdaptada.nombre)
                setImagen(respuestaAdaptada.imagen)
            }else{
                setNombre(respuesta.data.msg)
            }

        }
        funcion();
        
    },[])
    return(
        <section>
            <div className="parallax"></div>
            <div className="lineaSup">
                <div className="imgPerfilContainer">
                    <img className="imgPerfil" src={imagen} alt=""/>
                </div>
                <p className="text">{nombre}</p>
            </div>
           <section>Tu carrito
            
           </section>
        </section>

    )
}

export default UserData;