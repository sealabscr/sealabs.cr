
import breakpoints from '../../css/breakpoints'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { makeStyles } from '@material-ui/styles'

const themeBreakpoints = createBreakpoints(breakpoints)


const useStyles = makeStyles( theme => ({
    buttonMainStyle:{
        textDecoration: 'none',
        backgroundColor: '#0077FF',
        width: '180px',
        height: '60px',
        border: 'solid 1px #0077FF',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        [themeBreakpoints.down('sm')]: {
            width: '150px',
            height: '50px',
        },
        '&:hover': {
            transform: 'scale(1.05)',
            opacity: '0.9'
        }
    },
    iconButtonBox:{
        padding: '5px',
        backgroundColor:'white', 
        borderRadius: '50%',
        border: 'splid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [themeBreakpoints.down('sm')]: {
            padding: '5px',
        }
    },
}))

export default useStyles