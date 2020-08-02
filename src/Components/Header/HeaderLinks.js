/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { RestaurantMenu, MenuBook, Phone, Facebook } from '@material-ui/icons'

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.js'

import styles from './headerLinksStyle.js'
import RegularButton from '../../Components/CustomButtons/RegularButton'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <RegularButton href="/menu" color="transparent" className={classes.navLink}>
          <RestaurantMenu className={classes.icons} /> Menu
        </RegularButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <RegularButton
          href="tel:+1-816-894-3993"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Phone className={classes.icons} /> Call (816) 894-3993
        </RegularButton>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <RegularButton
            color="transparent"
            href="https://www.facebook.com/PhikulThaiBistro?ref=phikulthaibistro"
            target="_blank"
            className={classes.navLink}
          >
            <Facebook className={classes.icons} />
          </RegularButton>
        </Tooltip>
      </ListItem>
    </List>
  )
}
