import React from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import LandingPage from '../../views/LandingPage/LandingPage.js'
function App() {
  return (
    <Container className="App" disableGutters={true}>
      <>
        <HamburgerMenu />
        <LandingPage />
      </>
    </Container>
  )
}
export default App
