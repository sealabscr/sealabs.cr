import { DIMENSIONS, URL_IMAGES } from '../../constants'

import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)

const styles = makeStyles( theme => ({
    servicesWrapper:{
        backgroundColor: 'white',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    servicesContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '150px',
        paddingBottom: '150px',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
        },
    },
    servicesBoxContent:{
        marginTop:'50px',
        [themeBreakpoints.down('sm')]: {
            marginTop:'50px',
        },
    },
    buttonIcon:{
        fontSize: '28px!important',
        color: '#151B25',
        [themeBreakpoints.down('sm')]: {
            fontSize: '18px!important',
        },
    },
    headerSubtitle:{
        width:'85%',
        [themeBreakpoints.down('sm')]: {
            width:'100%',
        },
    },
    whatWeDoWrapper:{
        backgroundColor: 'white',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    whatWeDoContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '100px',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
        },
    },
    techWrapper:{
        backgroundColor: 'white',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    techWrapperContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '150px',
        paddingBottom: '150px',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
        },
    },
    techBoxContent:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'80px',
        [themeBreakpoints.down('sm')]: {
            marginTop:'50px',
        },
    },
    insideContent: {
        width: DIMENSIONS.SUB_WRAPPER,
        [themeBreakpoints.down('sm')]: {
            width: "90%",
        },
    },
}))

export default styles