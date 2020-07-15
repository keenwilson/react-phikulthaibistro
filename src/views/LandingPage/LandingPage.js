import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// core components
import Header from '../../components/Header/Header'
import Parallax from '../../components/Parallax/Parallax'
import HeaderLinks from '../../components/Header/HeaderLinks'
import SectionThaiComfortFood from './Sections/SectionThaiComfortFood'
import SectionContactHours from './Sections/SectionContactHours'

import styles from './landingPageStyle.js'
const useStyles = makeStyles(styles)

const dashboardRoutes = []

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props

  return (
    <div>
      <Container className="App" disableGutters={true}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Phikul Thai Bistro"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white',
          }}
          {...rest}
        />

        <Parallax small image={'https://i.imgur.com/9wlE3w6.png'}>
          <div className={classes.container}></div>
        </Parallax>
        <Parallax image={'https://i.imgur.com/OoI9Je9.png'}>
          <div className={classes.container}></div>
        </Parallax>
        <SectionThaiComfortFood />
        <SectionContactHours />
      </Container>
    </div>
  )
}
