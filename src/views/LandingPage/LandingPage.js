import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// core components
import Header from '../../Components/Header/Header'
import HeaderLinks from '../../Components/Header/HeaderLinks'
// nodejs library that concatenates classes
import classNames from 'classnames'
import SectionThaiComfortFood from './Sections/SectionThaiComfortFood'
import SectionContactHours from './Sections/SectionContactHours'
import navbarBackground from '../../assets/mangoesteen.png'
import headerIcons from '../../assets/header-thailand-icons.png'
import headerThreeDishes from '../../assets/header-3dishes.jpg'
import styles from './landingPageStyle.js'
import RegularButton from '../../Components/CustomButtons/RegularButton'
const useStyles = makeStyles(styles)

const dashboardRoutes = []

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const headerClasses = classNames(classes.imgFluid)

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
        <div className={classes.navbar}>
          <img src={navbarBackground} alt="Thailand Icons" className={headerClasses} />
        </div>

        <div>
          <img src={headerIcons} alt="Thailand Icons" className={headerClasses} />
        </div>
        <div>
          <img src={headerThreeDishes} alt="Thailand Icons" className={headerClasses} />
        </div>

        <div className={classes.flex}>
          <div className={classes.flexItem}>
            <Link to="/menu">
              <RegularButton fullWidth color="primary">
                See Our Menu
              </RegularButton>
            </Link>
          </div>
          <div className={classes.flexItem}>
            <RegularButton fullWidth color="primary" href="tel:+1-816-894-3993" target="_blank">
              Place Your Carry Out Order
            </RegularButton>
          </div>
        </div>

        <SectionThaiComfortFood />
        <SectionContactHours />
      </Container>
    </div>
  )
}
