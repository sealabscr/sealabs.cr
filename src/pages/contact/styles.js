import { DIMENSIONS, URL_IMAGES } from '../../constants'

import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)

const styles = makeStyles( theme => ({
    headerWrapper:{
        backgroundColor: 'white',
        height: '700px',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${URL_IMAGES.URL_IMG_LANDINGPAGE_HEADER})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
            backgroundImage: 'none',
            backgroundColor: '#F8F9FB' 
        },
    },
    headerContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        alignItems: 'center',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
            
        },
    },
    headerButtonsBox:{
        display: 'flex',
        gap: 20,
        marginTop:'30px'
    },
    headerSubtitle:{
        width:'70%',
        [themeBreakpoints.down('sm')]: {
            width:'100%',
        },
    },
}));