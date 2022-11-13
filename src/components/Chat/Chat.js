import "./Chat.scss"
import ForChat from "../FormChat/FormChat";
import ChatList from "../ChatList/ChatList";
import { useRef, useEffect } from "react";

const Chat = () => {
    const referenciaDeSectionMEnsaje = useRef(null);

    useEffect(()=>{
        const referenciaDeSectionMEnsajeCurrent = referenciaDeSectionMEnsaje.current;

        referenciaDeSectionMEnsajeCurrent.addEventListener("DOMNodeInserted", function(e){
            referenciaDeSectionMEnsajeCurrent.scrollTop = referenciaDeSectionMEnsajeCurrent.scrollHeight;
        })
    },[])
    return(
        <section className="chat">
            <h2 className="titleH1">Chat</h2>
            <section className="mensajes" ref={referenciaDeSectionMEnsaje} id="sectionMensaje">
                <ChatList/>
            </section>
            <ForChat/>
        </section>
    )
}

export default Chat;