import { WebsocketContext } from "../context/WebsocketContext";
import { useContext, useRef } from "react";
import { useEffect } from "react";
import { infoDeInicioDeSesion } from "../apiManager/api";

const ForChat = () => {
    const mensajeRef = useRef(null);
    const {mandarMensaje} = useContext(WebsocketContext);

    useEffect(()=>{
        const cajaMensaje = mensajeRef.current;
        let presionado=false; 
        cajaMensaje.addEventListener("keydown", function(e){
            if(e.code === "ControlLeft"){
                presionado=true
            }
        })
    
        cajaMensaje.addEventListener("keyup", function(e){
            if(e.code === "ControlLeft"){
                presionado=false
            }
            if(!presionado && (e.code === "Enter" || e.code === "NumpadEnter") && cajaMensaje.value.trim()!== ""){
                document.getElementById("buttonSubmit").click();
            }
            if (presionado && (e.code === "Enter" || e.code === "NumpadEnter")){
                cajaMensaje.value=cajaMensaje.value+"\n";
            }
            
        })
    },[])





    const handlerSubmit = async (e) => {
        e.preventDefault();
        const respuesta = await infoDeInicioDeSesion();
        if (respuesta.status == false) {
            alert("Tenes que loguearte antes")
        }else{
            const datosDelNuevoProducto = {
                user:{
                    email: respuesta.data.session.email,
                    id : respuesta.data.session.passport.user,
                },
                mensaje : document.getElementById("mensaje").value,
                timestamps: new Date()
            }
            mandarMensaje(datosDelNuevoProducto);
    
            document.getElementById("mensaje").value = "";
        }
        /* const datosDelNuevoProducto = {
            email : document.getElementById("email").value,
            mensaje : document.getElementById("mensaje").value
        }
        mandarMensaje(datosDelNuevoProducto);

        document.getElementById("mensaje").value = ""; */
    }



    return(
        <form id="chat-form" onSubmit={handlerSubmit}>
            <ul className="chat-form__ul">
                <li className="chat-form__ul__li">
                    <textarea className="areaDeTexto" id="mensaje" ref={mensajeRef} required></textarea>
                </li>
            </ul>
            <input className="form__button" id="buttonSubmit" type="submit" />
        </form>
    )
}

export default ForChat;