import React, { createContext, useContext, useState } from 'react';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const[userLogged, setUserLogged] = useState(false);
    const [render, setRender] = useState(false);

    console.log(userLogged);
    return (
        <UsuarioContext.Provider value={{ userLogged, setUserLogged, render, setRender }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export const useUsuario = () => {
    return useContext(UsuarioContext);
};
