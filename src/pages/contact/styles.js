import { DIMENSIONS, URL_IMAGES } from '../../constants'

import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)

const styles = makeStyles( theme => ({
    sendEmailWrapper:{
        backgroundColor: 'white',
        height: '100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
        },
    },
    sendEmailContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '100px',
        margin: '150px 0 150px 0',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 119, 255, 0.1) 0px 6px 24px 0px, rgba(0, 0, 0, 0.01) 0px 0px 0px 1px;',
        [themeBreakpoints.down('sm')]: {
            margin: '50px 0 50px 0',
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
        }
    },
    sendEmailCard:{
        width: '100%'
    },
    sendEmailAgreeText:{
        width: '100%'
    },
    sendEmailContent:{
        width: DIMENSIONS.SUB_WRAPPER,
        [themeBreakpoints.down('sm')]: {
            width: "90%",
        },
    },
    sendEmailText:{
        fontSize: '16px',
        fontWeight:'300',
        fontFamily: [
            'Poppins',
          ].join(',')
    },
    placingEnd:{       
        paddingTop: '50px',
        justifyContent:'flex-end'
    },
    sendEmailBtn:{
        
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right',
        [themeBreakpoints.down('sm')]: {
            justifyContent: 'left'
        }

    },
    servicesWrapper:{
        backgroundColor: 'white',
        height: '600px',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${URL_IMAGES.URL_IMG_SECTION_HEADER})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
        [themeBreakpoints.down('sm')]: {
            height: '100%',
            backgroundImage: 'none',
            backgroundColor: '#F8F9FB' 
        },
    },
    servicesContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        display: 'flex',
        alignItems: 'center',
        [themeBreakpoints.down('sm')]: {
            width: "90%",
            paddingTop: '50px',
            paddingBottom: '50px'
            
        },
    },
    buttonIcon:{
        color:'#0077FF'
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

export default styles