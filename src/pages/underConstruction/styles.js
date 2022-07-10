export default (theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    wrapperContent: {
        width: '1200px',
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            width: '90%'
        }
    },
    logoWrapper: {
        marginTop: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '40px',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    img: {
        width: '200px',
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            width: '150px'
        }
    },
    vector:{
        width: '100%'
    },
    content: {
        marginTop:'50px'
    },
    leftGrid:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'auto',
    },
    contentWrapper:{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column'
    },
    imageWrapper:{
        width: '1200px',
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            width: '230px'
        }
    },
    title:{
        margin: 0,
        padding:0,
        fontWeight: '400 ',
        fontSize: [40, "!important"],
        color: '#151B25',
        textAlign: 'left',
        fontFamily: [
            'Poppins',
          ].join(','),
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: [25, "!important"],
        }, 
    },
    titleBold: {
        color: '#0077FF'
    },
    text:{
        fontWeight: '500',
        fontSize: [20, "!important"],
        color: '#151B25',
        textAlign: 'left',
        fontFamily: [
            'Poppins',
          ].join(','),
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: [14, "!important"],
        }
    },
    linka:{
        textDecoration: 'none'
    },
    buttonBox:{
        marginTop:'25px',
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'10px',
        }
    },
    contactButton:{
        marginRight: '5px',
        height:'50px',
        padding: '0px 30px 0px 30px',
        backgroundColor: '#0077FF',
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        borderRadius: '10px',
        border: 'none',
        fontSize: 20,
        fontWeight: 600,
        fontFamily: [
            'Poppins',
          ].join(','),
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            height: '40px',
            fontSize: [15, "!important"],
        },
        '&:hover': {
            backgroundColor: '#151B25',
            color: 'white',
        },
    },
    contactButton2:{
        marginRight: '15px',
        height:'50px',
        padding: '0px 30px 0px 30px',
        backgroundColor: 'white',
        color: '#0077FF',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        borderRadius: '10px',
        border: 'solid 2px #0077FF',
        fontSize: 20,
        fontWeight: 600,
        fontFamily: [
            'Poppins',
          ].join(','),
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            height: '40px',
            fontSize: [15, "!important"],
        },
        '&:hover': {
            border: 'solid 2px #151B25',
            color: '#151B25',
        },
    }
})