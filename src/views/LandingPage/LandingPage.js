import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import styles from './landingPageStyle.js'
import Header from '../../components/Header/Header'
import GridContainer from '../../components/Grid/GridContainer.js'
import GridItem from '../../components/Grid/GridItem.js'

import Parallax from '../../components/Parallax/Parallax'
import HeaderLinks from '../../components/Header/HeaderLinks'
import SectionThaiComfortFood from './Sections/SectionThaiComfortFood'

const dashboardRoutes = []
const useStyles = makeStyles(styles)

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
      </Container>
    </div>
  )
}
