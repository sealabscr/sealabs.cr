
import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)


const useStyles = makeStyles( theme => ({
    iconBox:{
        backgroundColor: '#F8F9FB',
        width: '60px',
        height: '60px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentBox:{
        marginTop: '30px'
    },
    contentText:{
        marginTop: '10px',
        textAlign: 'justify',
    },
    cardBox: {
        padding: '20px',
        background: '#FFFFFF',
        boxShadow: '0px 5px 50px rgba(34, 85, 220, 0.2)',
        borderRadius: '10px',
    },
    buttonIcon:{
        fontSize: '28px!important',
        marginTop: '38px', 
        color: '#808080',
        [themeBreakpoints.down('sm')]: {
            fontSize: '18px!important',
        },
    }
}))

export default useStyles