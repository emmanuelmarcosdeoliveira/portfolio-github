import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Project from './containers/Project'
import temaLight from './themes/lignt'
import temaDark from './themes/dark'

function App() {
  const [useThemeDark, setuseThemeDark] = useState(false)

  function changeTheme() {
    setuseThemeDark(!useThemeDark)
  }
  return (
    <ThemeProvider theme={useThemeDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Project />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App
