
import breakpoints from '../../theme/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)


const useStyles = makeStyles( theme => ({
    cardbox:{
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 119, 255, 0.1) 0px 6px 24px 0px, rgba(0, 0, 0, 0.01) 0px 0px 0px 1px;x',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '35px',
        paddingRight: '35px',
        height: '300px',
        borderRadius: '10px',
        [themeBreakpoints.down('sm')]: {
            height: 'auto',
            paddingTop: '30px',
            paddingBottom: '30px',
            marginTop:'5px',
            marginBottom:'5px'
        },
    },
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
        marginTop: '25px',
        textAlign: 'justify',
        [themeBreakpoints.down('sm')]: {
            marginTop: '15px',
        },
    }
}))

export default useStyles