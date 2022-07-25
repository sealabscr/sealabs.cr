
import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'
import { DIMENSIONS, URL_IMAGES } from '../../constants'

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
    projectMangWrapper:{
        backgroundColor: 'white',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    projectMangContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        marginTop: '200px',
        marginBottom: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            marginTop: '50px',
            marginBottom: '50px'
        },
    },
    insideContent: {
        width: DIMENSIONS.SUB_WRAPPER,
        [themeBreakpoints.down('sm')]: {
            width: "90%",
        },
    },
    pmText:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    pargrahpCenter:{
        textAlign:'center',
        width: '70%',
        [themeBreakpoints.down('sm')]: {
            width: "100%",
        },
    },
    pmImage:{
        marginTop: '80px',
        [themeBreakpoints.down('sm')]: {
            marginTop: '50px',
        },
    },
    strategicLocationWrapper:{
        backgroundColor: 'white',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    strategicLocationContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        marginTop: '150px',
        marginBottom: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F9FB',
        borderRadius: '20px',
        backgroundImage: `url(${URL_IMAGES.VECTOR_ST_LOCATION_MAP})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'contain',
        [themeBreakpoints.down('sm')]: {
            backgroundImage: 'none' ,
            width: "90%",
            marginTop: '150px',
            marginBottom: '100px',
        },
    },
    strategicLocationContent:{
        marginTop: '100px',
        marginBottom: '100px',
        [themeBreakpoints.down('sm')]: {
            marginTop: '80px',
            marginBottom: '80px',
        },
    },
    stLocationTitleText:{
        [themeBreakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    stLocationText: {
        width: '60%',
        [themeBreakpoints.down('sm')]: {
            textAlign: 'justify',
            width: '100%',
        },
    },
    workWithUsWrapper:{
        backgroundColor: '#F6F9FE',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    workWithUsContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        marginTop: '150px',
        marginBottom: '150PX',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F9FE',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            marginTop: '80px',
            marginBottom: '80px',
        },
    }
}))

export default styles
