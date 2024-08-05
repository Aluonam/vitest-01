import React from 'react'
import ContextTheme from '../context/ContextTheme'

const ButtonChangeTheme = () => {

    const {backgroundColor, setBackgroundColor} = useContext(ContextTheme)
  return (
    <button onClick={()=>{console.log('He cambiado el tema')}}>Change theme</button>
  )
}

export default ButtonChangeTheme