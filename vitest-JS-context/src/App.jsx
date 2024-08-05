
import './App.css'

import React from 'react'
// import ExampleScreen from './screens/ExampleScreen.jsx'
import { ContextAppProvider } from './context/ContextTheme.jsx'
import ButtonChangeTheme from './components/ButtonChangeTheme.jsx'
import ActualTheme from './components/ActualTheme.jsx'

const App = () => {
  return (
    <>
     {/* <ContextAppProvider> */}
      {/* <ExampleScreen></ExampleScreen> */}
      <ButtonChangeTheme></ButtonChangeTheme>
      <ActualTheme></ActualTheme>
      {/* </ContextAppProvider> */}
    </>
  )
}

export default App
