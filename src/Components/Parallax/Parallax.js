import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import styles from './parallaxStyle.js'

const useStyles = makeStyles(styles)

export default function Parallax(props) {
  let windowScrollTop
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = React.useState('translate3d(0,' + windowScrollTop + 'px,0)')
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform)
      }
    }
  })
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)')
  }
  const { filter, className, children, style, image, small, medium, free, mobile } = props
  const classes = useStyles()

  let parallaxClasses
  if (window.innerWidth >= 768) {
    parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [classes.medium]: medium,
      [classes.free]: free,
      [className]: className !== undefined,
    })
  } else {
    parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [classes.medium]: medium,
      [classes.free]: free,
      [classes.mobile]: mobile,
      [className]: className !== undefined,
    })
  }
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: 'url(' + image + ')',
        transform: transform,
      }}
    >
      {children}
    </div>
  )
}
