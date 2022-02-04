
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import breakpoints from './breakpoints'

const themeBreakpoints = createBreakpoints(breakpoints)

const typography = {
  h1:{
    fontSize: 40,
    fontWeight: 700,
    [themeBreakpoints.down('md')]: {
      fontSize: 25,
    },
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  h2:{
    fontSize: 25,
    fontWeight: 700,
    [themeBreakpoints.down('md')]: {
      fontSize: 20,
    },
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  h3:{
    fontSize: 22,
    fontWeight: 700,
    [themeBreakpoints.down('md')]: {
      fontSize: 15,
    },
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  body1: {
    fontSize: 20,
    fontWeight: 500,
    [themeBreakpoints.down('md')]: {
      fontSize: 12,
    },
    fontFamily: [
      'Montserrat',
    ].join(','),
  }
}

export default typography