
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import breakpoints from './breakpoints'

const themeBreakpoints = createBreakpoints(breakpoints)

const typography = {
  h1:{
    fontSize: 45,
    fontWeight: 700,
    [themeBreakpoints.down('sm')]: {
      fontSize: 25,
    },
  },
  h2:{
    fontSize: 30,
    fontWeight: 700,
    [themeBreakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  h3:{
    fontSize: 25,
    fontWeight: 700,
    [themeBreakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
  body1: {
    fontSize: 22,
    fontWeight: 500,
    [themeBreakpoints.down('sm')]: {
      fontSize: 12,
    },
  }
}

export default typography