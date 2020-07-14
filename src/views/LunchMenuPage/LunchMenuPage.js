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
import { AppetizersData } from '../../assets/RestaurantMenu/appetizersData'
import { CurriesData } from '../../assets/RestaurantMenu/curriesData'
import { FromTheWorkData } from '../../assets/RestaurantMenu/fromTheWokData'
import { SoupsData } from '../../assets/RestaurantMenu/soupsData'
import { SaladsData } from '../../assets/RestaurantMenu/saladsData'
import { NoodlesData } from '../../assets/RestaurantMenu/noodlesData'
import { FriedRiceData } from '../../assets/RestaurantMenu/friedRiceData'
import { SidesData } from '../../assets/RestaurantMenu/sidesData'
import { DessertsData } from '../../assets/RestaurantMenu/dessertsData'
import { DrinksData } from '../../assets/RestaurantMenu/drinksData'

const useStyles = makeStyles(styles)

export default function LunchMenuPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
  return (
    <div>
      <Container disableGutters={true}>
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
        <div className={classNames(classes.container, classes.divider)}></div>

        <div className={classes.container}>
          <GridContainer justify="flex-start" alignItems="flex-start">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.profile}>
                  <div>
                    <img src="https://i.imgur.com/oMhYzMV.jpg" alt="..." className={imageClasses} />
                  </div>
                  {/* Appetizer */}
                  <div className={classes.nameTop}>
                    <h3 className={classes.title}>Appetizers</h3>
                    {AppetizersData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                  {/* Curries */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Curries</h3>
                    {CurriesData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />

                  {/* From The Wok */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>From The Wok</h3>
                    {FromTheWorkData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.profile}>
                  <div>
                    <img src="https://i.imgur.com/nNVVhV3.jpg" alt="..." className={imageClasses} />
                  </div>
                  {/* Soups */}
                  <div className={classes.nameTop}>
                    <h3 className={classes.title}>Soups</h3>
                    {SoupsData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                  {/* Salads */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Salads</h3>
                    {SaladsData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                  {/* Noodles */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Noodles</h3>
                    {NoodlesData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                  {/* Fried Rice */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Fried Rice</h3>
                    {FriedRiceData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                  {/* Sides */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Sides</h3>
                    {SidesData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                  {/* Desserts */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Desserts</h3>
                    {DessertsData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                  {/* Drinks */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Drinks</h3>
                    {DrinksData.map((item) => {
                      if (item.price.lunch.length > 0) {
                        return (
                          <div key={item.name}>
                            <h4>{item.name}</h4>
                          </div>
                        )
                      }
                    })}
                  </div>
                  <img
                    alt="Phikul Drawing"
                    src="https://i.imgur.com/TQtKYEN.png"
                    style={{ height: '30px', width: '30px' }}
                  />
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Container>
    </div>
  )
}
