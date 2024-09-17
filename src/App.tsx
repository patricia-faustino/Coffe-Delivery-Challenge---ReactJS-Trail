import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CoffesContextProvider } from './contexts/CoffesContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffesContextProvider>
          <Router />
        </CoffesContextProvider>
      </BrowserRouter>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
