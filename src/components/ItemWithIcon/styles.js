
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
    }
}))

export default useStyles