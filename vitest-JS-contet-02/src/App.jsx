
import './App.css'
import ActualTheme from './components/ActualTheme'
import ButtonChangeBackground from './components/ButtonChangeBackground'
import { ContextAppProvider } from './context/ContextTheme'


function App() {

  return (
    <>
    <ContextAppProvider>
          <ActualTheme></ActualTheme>
          <ButtonChangeBackground></ButtonChangeBackground> 
    </ContextAppProvider>
    </>
  )
}

export default App
