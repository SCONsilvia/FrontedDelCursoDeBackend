import { createContext } from 'react';
import React, { useState } from 'react';
import io from 'socket.io-client';

export const WebsocketContext = createContext();

const socket = io("ws://localhost:8080", {
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