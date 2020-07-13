import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import styles from './landingPageStyle.js'
import Header from '../../components/Header/Header'
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

const dashboardRoutes = []
const useStyles = makeStyles(styles)

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Phikul Thai Bistro"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter image={'https://i.imgur.com/OoI9Je9.png'}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold title, that{"'"}s
                why we added this text here. Add here all the information that can make you or your
                product create the first impression.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  )
}
