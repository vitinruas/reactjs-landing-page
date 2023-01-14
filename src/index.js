import React from 'react'
import ReactDOM from 'react-dom/client'

// components
import { App } from './App'

// styled
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global-styles'
import { theme } from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
