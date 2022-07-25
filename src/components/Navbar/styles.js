import { DIMENSIONS } from '../../constants/';
import breakpoints from '../../theme/breakpoints'

import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)

const useStyles = makeStyles( theme => ({
    navbarWrapper:{
        backgroundColor: 'white',
        height: '100px',
        boxShadow: '0px 5px 50px rgba(0, 119, 255, 0.1)',
        webkitBoxShadow: '0px 5px 50px rgba(0, 119, 255, 0.1)',
        "-webkit-box-shadow": '0px 5px 50px rgba(0, 119, 255, 0.1)',
        "-moz-box-shadow": '0px 5px 50px rgba(0, 119, 255, 0.1)',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    navbarContent:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        alignItems: 'center',
        [themeBreakpoints.down('sm')]: {
            padding: '20px 10px'
        },
    },
    navBarLogo:{
        width:'200px',
        [themeBreakpoints.down('sm')]: {
            width:'150px',
            paddingTop: '3px'
        },
    },
    navbarHamburgerMenuBox:{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
    },
    navbarItemsBox:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '30px',
    },
    navbarItem:{
        fontFamily: [
            'Poppins',
          ].join(','),
        fontSize:'20px',
        fontWeight: '500',
        textDecoration: 'none',
        color: '#151B25',
        '&:hover': {
            textDecoration: 'none',
            color: '#0077FF',
        },
    },
    navbarItemActive:{
        fontFamily: [
            'Poppins',
          ].join(','),
        fontSize:'20px',
        fontWeight: '600',
        textDecoration: 'none',
        color: '#0077FF',
        '&:hover': {
            textDecoration: 'none',
            color: '#0077FF',
        },
    },
    listDrawerBox:{
        width:'250px',
        marginTop: '70px'
    },
}))

export default useStyles