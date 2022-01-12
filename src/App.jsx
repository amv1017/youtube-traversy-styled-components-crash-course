import React from 'react'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#033'
  }
}

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Components in Container</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
