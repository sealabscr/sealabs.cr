
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles( theme => ({
    cardBox: {
        background: 'white',
        boxShadow: 'rgba(0, 119, 255, 0.1) 0px 6px 24px 0px, rgba(0, 0, 0, 0.01) 0px 0px 0px 1px;',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    imageBox: {
        width: '100%',
        height: 'auto',
        marginBottom: '20px'
    },
    descriptionBox:{
        marginTop: '10px',
        textAlign: 'justify',
    },
    contentBox:{
        marginTop: '30px',
        width:'90%',
        alignSelf: 'center'
    },
    linkedInIcon:{
        fontSize: '28px!important',
        marginTop: '20px', 
        color: '#A9A9A9'        
    }
}))

export default useStyles