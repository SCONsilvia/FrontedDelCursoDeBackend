import { createContext } from 'react';
import React, { useState } from 'react';

export const VariableContext = createContext();

export const VariableContextProvide = ({children}) => {
  return(
    <VariableContext.Provider value={{crearNuevoProducto, productosDinamico, chatDinamicoMensajeUser, mandarMensaje, agregarNuevoChat,claseDelChat}}>
      {children}
    </VariableContext.Provider>
  )
}