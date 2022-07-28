import { DIMENSIONS, URL_IMAGES } from '../../constants'

import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)

const styles = makeStyles( theme => ({
    whoWeAreWrapper:{
        backgroundColor: 'white',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    whoWeAreContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '150px',
        paddingBottom: '100px',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
        },
    },
    teamCardsWrapper:{
        backgroundColor: 'white',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    teamCardsContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,

        paddingTop: '150px',
        paddingBottom: '150px',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
        },
    },
    headerSubtitle:{
        textAlign: 'justify',
        [themeBreakpoints.down('sm')]: {
            width:'100%',
        },
    },
    insideContent:{
        width: DIMENSIONS.SUB_WRAPPER,
        backgroundColor: 'red',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
        },
    },
    whoWeAreBoxContent:{
        width: '100%',
        marginTop:'100px',
        [themeBreakpoints.down('sm')]: {
            marginTop:'50px',
        },
    },
    valueTitle:{
        fontSize: '25px',
        fontWeight: '500'
    },
    ourValuesWrapper:{
        backgroundColor: 'white',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    ourValuesContentWrapper:{
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
    ourValuesContent:{
        backgroundColor: 'white',
        marginTop:'100px',
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
    }

    
}))

export default styles
