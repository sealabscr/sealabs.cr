import { DIMENSIONS, URL_IMAGES } from '../../constants'

import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)

const styles = makeStyles( theme => ({
    careerWrapper:{
        backgroundColor: 'white',
        height: '600px',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${URL_IMAGES.URL_IMG_SECTION_HEADER})` ,
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
    careerContentWrapper:{
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
    buttonIcon:{
        fontSize: '20px!important',
        color: '#0077FF',
        [themeBreakpoints.down('sm')]: {
            fontSize: '18px!important',
        },
    },
    buttonIconSecondary:{
        fontSize: '20px!important',
        color: 'white',
        [themeBreakpoints.down('sm')]: {
            fontSize: '18px!important',
        },
    },
    formWrapper:{
        backgroundColor: 'white',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    formContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        marginTop: '150px',
        marginBottom: '200px',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            marginTop: '50px',
            marginBottom: '50px'
        },
    },
    searchComponent:{
        width:'100%',
    },
    filterBox:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterButton:{
        cursor:  'pointer',
        '&:hover':{
            textDecoration: 'underline' 
        }
    },
    resultsBox: {
        width: '100%',
        height: '150px',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [themeBreakpoints.down('sm')]: {
            marginTop: '50px',
        },
    },
    insideContent: {
        width: DIMENSIONS.SUB_WRAPPER,
        [themeBreakpoints.down('sm')]: {
            width: "90%",
        },
    }
}))

export default styles
