import { useEffect, useState } from 'react';
import { useContext } from "react";
import { WebsocketContext } from "../context/WebsocketContext";
import { createAdaptedChatArr } from "../adapter/adapter";

const ChatDinamico = ({Componente}) => {
    const {chatDinamicoMensajeUser} = useContext(WebsocketContext);
    const [chatDinamicoMensajeUserParaArmaHtml, setChatDinamicoMensajeUserParaArmaHtml] = useState([]);

    useEffect(()=>{
        console.log(chatDinamicoMensajeUser)
        const productoAdaptado = createAdaptedChatArr(chatDinamicoMensajeUser);
        setChatDinamicoMensajeUserParaArmaHtml(productoAdaptado)
    },[chatDinamicoMensajeUser]);
    
    return(
        <>
            {chatDinamicoMensajeUserParaArmaHtml.length > 0 ? chatDinamicoMensajeUserParaArmaHtml.map(item => <Componente key={item.id} data={item}  clase = {item.clase}/>): null}
        </>
    )
}

export default ChatDinamico;