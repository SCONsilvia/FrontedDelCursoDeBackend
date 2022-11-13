import "./ChatList.scss"
import Mensaje from "../Mensaje/Mensaje";
import { allChat } from "../../apiManager/api";
import { useEffect, useState } from "react";
import { createAdaptedChatList } from "../../adapter/adapter";
import ChatDinamico from "../ChatDinamico/ChatDinamico";

const ChatList = () => {
    const [chat, setChat] = useState([]);
    useEffect(()=>{
        const allChatAsync = async () =>{
            const respuesta = await allChat();
            if(respuesta.status){
                const respuestaAdaptada = createAdaptedChatList(respuesta.data);
                setChat(respuestaAdaptada);
            }else{
                return <p>Acaba de ocurrir un error</p>
            }
        }
        allChatAsync();
    },[]);

    return(
        <>  
            {chat.length > 0 ? chat.map(item => <Mensaje key={item.id} data={item}/>): <p>Cargando</p>}
            <ChatDinamico Componente={Mensaje}/>
        </>
    )
}

export default ChatList;