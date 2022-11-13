import "./FormChat.scss"
import { WebsocketContext } from "../../context/WebsocketContext";
import { useContext, useRef } from "react";
import { useEffect } from "react";

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





    const handlerSubmit = (e) => {
        e.preventDefault();
        const datosDelNuevoProducto = {
            email : document.getElementById("email").value,
            mensaje : document.getElementById("mensaje").value
        }
        mandarMensaje(datosDelNuevoProducto);

        document.getElementById("mensaje").value = "";
    }



    return(
        <form id="chat-form" onSubmit={handlerSubmit}>
            <ul className="chat-form__ul">
                <li className="chat-form__ul__li">
                    <label className="chat-form__ul__li__label" htmlFor="email">Correo:</label>
                    <input className="chat-form__ul__li__input" type="email" id="email" name="email" required />
                </li>
                <li className="chat-form__ul__li">
                    <textarea className="areaDeTexto" id="mensaje" ref={mensajeRef} required></textarea>
                </li>
            </ul>
            <input className="form__button" id="buttonSubmit" type="submit" />
        </form>
    )
}

export default ForChat;