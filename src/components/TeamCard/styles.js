
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles( theme => ({
    cardBox: {
        background: 'white',
        boxShadow: 'rgba(0, 119, 255, 0.1) 0px 6px 24px 0px, rgba(0, 0, 0, 0.01) 0px 0px 0px 1px;',
        borderRadius: '10px',
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'scale(1.03)',
        }
    },
    imageBox: {
        width: '100%',
        height: '300px',
    },
    img:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
    contentBox:{
        padding: '30px',
        height: '100%',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
    },
    descriptionBox:{
        marginTop: '10px',
        textAlign: 'justify',
    },
    linkedInIcon:{
        fontSize: '28px!important',
        marginTop: '20px', 
        color: '#151B25',
        "&:hover":{
            color: '#0077FF',
        }    
    }
    
}))

export default useStyles