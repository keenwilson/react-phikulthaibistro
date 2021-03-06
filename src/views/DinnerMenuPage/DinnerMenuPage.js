import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// core components
import Header from '../../Components/Header/Header'
import HeaderLinks from '../../Components/Header/HeaderLinks'
import Parallax from '../../Components/Parallax/Parallax'
import GridContainer from '../../Components/Grid/GridContainer'
import GridItem from '../../Components/Grid/GridItem'
// restaurant menu data
import { AppetizersData } from '../../assets/RestaurantMenu/appetizersData'
import { CurriesData } from '../../assets/RestaurantMenu/curriesData'
import { FromTheWorkData } from '../../assets/RestaurantMenu/fromTheWokData'
import { SoupsData } from '../../assets/RestaurantMenu/soupsData'
import { SaladsData } from '../../assets/RestaurantMenu/saladsData'
import { NoodlesData } from '../../assets/RestaurantMenu/noodlesData'
import { DessertsData } from '../../assets/RestaurantMenu/dessertsData'
import { DrinksData } from '../../assets/RestaurantMenu/drinksData'
import { HouseFavoriteData } from '../../assets/RestaurantMenu/houseFavoritesData'

import styles from './dinnerMenuPageStyle.js'

const useStyles = makeStyles(styles)

export default function DinnerMenuPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)
  let classNameForTop
  if (window.innerWidth >= 768) {
    classNameForTop = classes.nameTop
  } else {
    classNameForTop = classes.nameMobile
  }

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
        <Parallax medium image={'https://i.imgur.com/3FhQOLk.png'}>
          <div className={classes.container}>{/* Dinner Menu */}</div>
        </Parallax>
        <div className={classNames(classes.container, classes.divider)}></div>

        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.profile}>
              <div>
                <img src="https://i.imgur.com/nNVVhV3.jpg" alt="..." className={imageClasses} />
              </div>
              <GridContainer justify="flex-start" alignItems="flex-start">
                <GridItem xs={12} sm={12} md={6}>
                  {/* Appetizer */}
                  <div className={classes.nameTop}>
                    <h3 className={classes.title}>Appetizers</h3>
                    {AppetizersData.map((item) => {
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
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
                  {/* House Favorites */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>House Favorites</h3>
                    {HouseFavoriteData.map((item) => {
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
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
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  {/* Soups and Salads */}
                  <div className={classNameForTop}>
                    <h3 className={classes.title}>Soups and Salads</h3>
                    {SoupsData.map((item) => {
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                        )
                      }
                    })}
                    {SaladsData.map((item) => {
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
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
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
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
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
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

                  {/* Desserts and Drinks */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Desserts and Drinks</h3>
                    {DessertsData.map((item) => {
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                        )
                      }
                    })}
                    {DrinksData.map((item) => {
                      if (item.price.dinner.length > 0) {
                        return (
                          <div className={classes.description} key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
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
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
