import { createContext } from 'react';
import React, { useState } from 'react';
import io from 'socket.io-client';

export const WebsocketContext = createContext();

//ws://localhost:8080
//wss://fantastic-paint-airport.glitch.me/
const socket = io("ws://localhost:8080", {//para que funcione en localhost "ws://localhost:8080" y en servidor real "wss://materialistic-tender-agreement.glitch.me/"
  transports: ["websocket"] // use webSocket only
});

export const WebsocketContextProvide = ({children}) => {
/*   const [isConnected, setIsConnected] = useState(socket.connected); */
  const [productosDinamico, setProductosDinamico] = useState([]);

  const [chatDinamicoMensajeUser, setChatDinamicoMensajeUser] = useState([]);

/*   socket.on('connect', () => {
    setIsConnected(true);
  });

  socket.on('disconnect', () => {
    setIsConnected(false);
  }); */

  socket.on('agregarNuevoProductoYQueSeVeaParaTodosLosUsuario', (data) => {
    setProductosDinamico([...productosDinamico,data]);
  }); 

  const crearNuevoProducto = (data) => {
    socket.emit('envioDeDatosDeUnNuevoProducto',data);
  }

  const mandarMensaje = (data) => {
    socket.emit('envioDeDatosDelChat',data);
  }

  socket.on("agregarNuevoChatUser",(data)=>{
    data.clase="unMensaje2"
    setChatDinamicoMensajeUser([...chatDinamicoMensajeUser, data])
  });

  socket.on("agregarNuevoChat",(data)=>{
    data.clase="unMensaje"
    setChatDinamicoMensajeUser([...chatDinamicoMensajeUser, data])
  });


  return(
    <WebsocketContext.Provider value={{crearNuevoProducto, productosDinamico, chatDinamicoMensajeUser, mandarMensaje}}>
      {children}
    </WebsocketContext.Provider>
  )
}