
import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)


const useStyles = makeStyles( theme => ({
    imageBox: {
        width: '100%',
        height: 'auto',
        marginBottom: '20px'
    },
    contentBox:{
        marginTop: '30px'
    },
    descriptionBox:{
        marginTop: '10px',
        textAlign: 'justify',
    },
    contentBox:{
        width:'90%',
        alignSelf: 'center'
    },
    cardBox: {
        padding: '20px',
        margin: '20px',
        background: '#FFFFFF',
        boxShadow: '0px 5px 50px rgba(34, 85, 220, 0.2)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    linkedInIcon:{
        fontSize: '28px!important',
        marginTop: '20px', 
        color: '#A9A9A9'        
    }
}))

export default useStyles