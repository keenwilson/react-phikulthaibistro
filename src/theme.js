import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#c8a877',
      light: '#e2dccb',
      dark: '#d2aa6d',
    },
    secondary: {
      main: '#2c243c',
      light: '#b47fc0',
      dark: '#b47fc0',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fcfaf7',
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
})
export default theme
