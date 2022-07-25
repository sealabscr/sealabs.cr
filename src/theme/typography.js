import breakpoints from './breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const themeBreakpoints = createBreakpoints(breakpoints)

const typography = {
  h1:{
    fontSize: 40,
    fontWeight: 700,
    [themeBreakpoints.down('md')]: {
      fontSize: 25,
    },
    fontFamily: [
      'Poppins',
    ].join(','),
  },
  h2:{
    fontSize: 25,
    fontWeight: 700,
    [themeBreakpoints.down('md')]: {
      fontSize: 20,
    },
    fontFamily: [
      'Poppins',
    ].join(','),
  },
  h3:{
    fontSize: 22,
    fontWeight: 700,
    [themeBreakpoints.down('md')]: {
      fontSize: 15,
    },
    fontFamily: [
      'Poppins',
    ].join(','),
  },
  body1: {
    fontSize: 20,
    fontWeight: 500,
    [themeBreakpoints.down('md')]: {
      fontSize: 12,
    },
    fontFamily: [
      'Poppins',
    ].join(','),
  }
}

export default typography