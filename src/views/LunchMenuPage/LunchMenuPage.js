import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// core components
import Header from '../../components/Header/Header'
import Parallax from '../../components/Parallax/Parallax'
import HeaderLinks from '../../components/Header/HeaderLinks'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Button from '../../components/CustomButtons/Button.js'

import styles from './lunchMenuPageStyle.js'

const useStyles = makeStyles(styles)

export default function LunchMenuPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
  return (
    <div>
      <Container className="App" disableGutters={true}>
        <Header
          color="transparent"
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
          <div className={classes.container}>{/* Purplr Background for Header */}</div>
        </Parallax>
        <Parallax medium image={'https://i.imgur.com/cGxSCCh.png'}>
          <div className={classes.container}>{/* Lunch Menu */}</div>
        </Parallax>
        <div className={classNames(classes.container, classes.mainContainer)}></div>
        <Parallax>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src="https://i.imgur.com/oMhYzMV.jpg"
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Christian Louboutin</h3>
                      <h6>DESIGNER</h6>
                    </div>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <div className={classes.profile}>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Christian Louboutin</h3>
                      <h6>DESIGNER</h6>
                    </div>
                    <div className={classes.description}>
                      <p>
                        An artist of considerable range, Chet Faker — the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
                        all of his own music, giving it a warm, intimate feel with a solid groove
                        structure.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </Container>
    </div>
  )
}
