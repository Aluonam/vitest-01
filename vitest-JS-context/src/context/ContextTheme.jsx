import { createContext } from "react"
import { useState } from "react"

  
export const ContextTheme = createContext()

export const ContextAppProvider = ({ children }) => {

    const [backgroundColor, setBackgroundColor] = useState('blue')


    const valuesProvider = {
        backgroundColor,
        setBackgroundColor
    }

    return (
        <ContextTheme.Provider value={valuesProvider}>{children}</ContextTheme.Provider>
    )
}
