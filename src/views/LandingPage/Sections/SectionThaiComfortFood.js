import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components

import styles from './thaiComfortFoodStyle.js'
import GridContainer from '../../../Components/Grid/GridContainer'
import GridItem from '../../../Components/Grid/GridItem'
import Parallax from '../../../Components/Parallax/Parallax'

const useStyles = makeStyles(styles)

export default function SectionThaiComfortFood() {
  const classes = useStyles()
  return (
    <Parallax medium image={'https://i.imgur.com/gPZyDlb.png'}>
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={7}>
              <h2>Authentic Thai delicacy that many locals are passionate about</h2>
              <h4>
                Given that one of the first things Thais ask each other when they meet up is "Have
                you eaten yet?" it's clear this is a nation that's extremely passionate about its
                eats. We are excited to show the flavors of both world-famous and worth trying Thai
                cuisine to the Kansas City's River Market.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Parallax>
  )
}
