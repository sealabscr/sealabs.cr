import { DIMENSIONS } from '../../constants/';
import { makeStyles } from '@material-ui/styles'
import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const themeBreakpoints = createBreakpoints(breakpoints)

const useStyles = makeStyles( theme => ({
    footerWrapper:{
        backgroundColor: '#F2F1EF',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
    },
    footerContent:{
        width: DIMENSIONS.MAIN_WRAPPER,
        marginTop: '100px',
        marginBottom: '50px',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            marginTop: '100px',
            marginBottom: '50px',
        },
    },
    footerLinks:{
        marginBottom:'10px',
        fontSize: 20,
        fontWeight: 400,
        color: "#151B25",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('sm')]: {
            fontSize: 20,
        },
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
            color: '#0077FF',
        },
    },
    footerItemBox:{
        marginTop: '40px',
        display: 'block',
        [themeBreakpoints.down('sm')]: {
            marginTop: '20px',
            marginBottom: '50px'
        },
    },
    newsLetterBox:{
        marginTop: '40px',
        display: 'block',
        width: '85%',
        [themeBreakpoints.down('sm')]: {
            width: '100%',
            marginTop: '20px',
            marginBottom: '50px'
        },
    },
    divisorLine:{
        backgroundColor: '#0077FF',
        border: 'solid 0,5px #0077FF',
        marginTop: '100px',
        marginBottom: '50px',
        [themeBreakpoints.down('sm')]: {
            marginTop: '20px',
            marginBottom: '50px'
        },
    },
    footerLogoBox:{
        maxWidth: '200px',
        [themeBreakpoints.down('sm')]: {
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px'
        },
    },
    footerLogo:{
        maxWidth: '200px',
    },
    footerRights:{
        width: '100%',
        textAlign: 'right',
        fontSize: 15,
        fontWeight: 400,
        color: "#151B25",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('sm')]: {
            fontSize: 15,
            textAlign: "center"
        },
    },
    footerSocialBox:{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '20px'
    },
    socialIcon:{
        color: '#151B25', 
        '&:hover': {
            textDecoration: 'none',
            color: '#0077FF',
        },
    },
    newsletterMessage:{
        marginTop: '20px',
        width: '100%',
        textAlign: 'left',
        fontSize: 15,
        fontWeight: 400,
        color: "#151B25",
        fontFamily: [
          'Poppins',
        ].join(','),
        [themeBreakpoints.down('sm')]: {
            fontSize: 15,
        },
    }
}))

export default useStyles