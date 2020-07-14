import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.js'
import GridItem from '../../../components/Grid/GridItem.js'
import Parallax from '../../../components/Parallax/Parallax.js'

import styles from './contactHoursStyle.js'

const useStyles = makeStyles(styles)

export default function SectionContactHours() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={'https://i.imgur.com/cc8vBet.png'}
              alt="..."
              className={classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid}
            />
            <h2>Hours</h2>
            <h3>
              Tuesday 11 AM-9 PM <br />
              Wednesday 11 AM-9 PM <br />
              Thursday 11 AM-9 PM <br />
              Friday 11 AM-10 PM <br />
              Saturday 11 AM-10 PM <br />
              Sunday 11 AM-9 PM <br />
              Monday Closed <br />
            </h3>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={'https://i.imgur.com/2TCbH7s.png'}
              alt="..."
              className={classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid}
            />
            <h2>Location</h2>
            <h3>
              We are locating next to the City Market streetcar stop. <br />
              17 E 5th St, Kansas City, MO 64106 <br />
              Tel. (123) 456-7890 <br />
            </h3>
            <iframe
              title="Phikul Thai Bistro Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12383.663936026447!2d-94.5820843!3d39.1083829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8b9d2ccbe30d510!2sPhikul%20Thai%20Bistro!5e0!3m2!1sen!2sus!4v1594751972056!5m2!1sen!2sus"
              width="400"
              height="300"
              frameborder="0"
              style={{ border: '0' }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
