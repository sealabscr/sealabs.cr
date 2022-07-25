import breakpoints from '../theme/breakpoints'

import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)

const fontsStyles = makeStyles( theme => ({
    h1:{
        fontSize: 40,
        fontWeight: 600,
        color: "#151B25",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('md')]: {
            fontSize: 20,
          },
    },
    h2:{
        fontSize: 30,
        fontWeight: 600,
        color: "#151B25",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('md')]: {
            fontSize: 18,
          },
    },
    h3:{
        fontSize: 20,
        fontWeight: 600,
        color: "#151B25",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('md')]: {
            fontSize: 25,
          },
    },
    p:{
        margin: 0,
        fontSize: 20,
        fontWeight: 400,
        color: "#151B25",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('md')]: {
          fontSize: 15,
            margin: 0,
        },
    },
    colorBlue:{
        color: "#0077FF",
    },
    links:{
        cursor: 'pointer',
        textDecoration: 'none'
    },
    primaryButtonText:{
      margin: 0,
        fontSize: 20,
        fontWeight: 500,
        color: "white",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('md')]: {
          fontSize: 15,
            margin: 0,
        },
    },
    secondaryButtonText:{
      margin: 0,
        fontSize: 20,
        fontWeight: 500,
        color: "#0077FF",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('md')]: {
          fontSize: 15,
            margin: 0,
        },
    }
}))

export default fontsStyles