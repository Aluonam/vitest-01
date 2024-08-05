import React, { createContext, useState } from 'react';

export const NombreContext = createContext(); 

export const ContextAppProvider = ({children}) => {
//-----------------------------------------------------------------1º PARTE
    const [apellido, setapellido] = useState("Martinez")
    const llamadaConsole = ()=>{console.log("Hola mundo console")}
//-----------------------------------------------------------------2º PARTE 
  const valuesProvider = {
    nombre: 'Juan', //Se puede pasar un valor normal fijo/variable/const
    apellido,  //Se puede pasar el valor de un useState
    setapellido, //Se puede pasar el set del useState
    llamadaConsole //Se pueden enviar funciones definidas previamente
  };
//-----------------------------------------------------------------3º PARTE
  return (
    <NombreContext.Provider value={valuesProvider}>
      {children}
    </NombreContext.Provider>
  );
}