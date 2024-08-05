import React, { createContext, useState } from "react";

export const ContextTheme = createContext();

export const ContextAppProvider = (props) =>{
    const [themeColor, setThemeColor] = useState('white');

    const valuesProvider = {
        themeColor,
        setThemeColor
    }

    return(
        <ContextTheme.Provider value={valuesProvider}>
            {props.children}
        </ContextTheme.Provider>
    )
}