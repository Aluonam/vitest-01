import React, { useContext } from 'react'
import { ContextTheme } from '../context/ContextTheme'

const ActualTheme = () => {

    const {themeColor, setThemeColor} = useContext(ContextTheme)

  return (
    <div>ActualTheme {themeColor} </div>
  )
}

export default ActualTheme