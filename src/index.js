import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import * as serviceWorker from './serviceWorker'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './views/LandingPage/LandingPage.js'
import LunchMenuPage from './views/LunchMenuPage/LunchMenuPage.js'
import DinnerMenuPage from './views/DinnerMenuPage/DinnerMenuPage'

var hist = createBrowserHistory()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router history={hist}>
      <Switch>
        <Route path="/landing" component={LandingPage} />
        <Route path="/menu" component={LunchMenuPage} />
        <Route path="/dinner-menu" component={DinnerMenuPage} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
