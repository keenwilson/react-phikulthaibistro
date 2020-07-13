import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import './Showcase.css'
import logo from './../../logo.svg'
import Typography from '@material-ui/core/Typography'
import { Button, Paper } from '@material-ui/core'
import Parallax from '../../components/Parallax/Parallax'

import styles from './showcaseStyle.js'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
const useStyles = makeStyles(styles)
export default function Showcase() {
  const classes = useStyles()
  return (
    <header className="showcase">
      <div className="container showcase-inner">
        <img className="header" src={'https://i.imgur.com/OoI9Je9.png'} />
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <Typography align="left" variant="h4" component="h1" gutterBottom>
        Phikul Thai Bistro
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit
        delectus quam molestiae explicabo cum facere ratione veritatis.
      </p>
      <Paper>
        <Button variant="contained" color="primary">
          Our Menu
        </Button>
        <Button variant="contained" color="secondary">
          Contact
        </Button>
      </Paper>
    </header>
  )
}
