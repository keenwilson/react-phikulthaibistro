import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import styles from './landingPageStyle.js'
import Header from '../../components/Header/Header'
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import HeaderLinks from '../../components/Header/HeaderLinks'

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
            height: 400,
            color: 'white',
          }}
          {...rest}
        />
        <Parallax filter image={'https://i.imgur.com/OoI9Je9.png'}>
          <div className={classes.container}></div>
        </Parallax>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Your Story Starts With Us.</h1>
            <h4>
              Every landing page needs a small description after the big bold title, that{"'"}s why
              we added this text here. Add here all the information that can make you or your
              product create the first impression.
            </h4>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  )
}
