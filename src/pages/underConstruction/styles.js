export default (theme) => ({
    wrapper: {
      padding: '60px 0 0 60px',
      display: 'flex',
      ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
        padding: '50px 0px 50px 0px',
        justifyContent: 'center'
      }
    },
    logoWrapper: {
        width: '180px'
    },
    img: {
        width: '100%'
    },
    contentWrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imageWrapper:{
        width: '450px',
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            width: '230px'
        }
    },
    title:{
        margin: 0,
        padding:0,
        fontWeight: '700',
        fontSize: [50, "!important"],
        color: '#0C4160',
        textAlign: 'center',
        fontFamily: [
            'Montserrat',
          ].join(','),
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: [25, "!important"],
        }
    },
    text:{
        fontWeight: '500',
        fontSize: [18, "!important"],
        color: '#98A4B0',
        textAlign: 'center',
        fontFamily: [
            'Montserrat',
          ].join(','),
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0px 50px 0px 50px',
            fontSize: [14, "!important"],
        }
    },
    contactButton:{
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        marginTop: '25px',
        padding: '20px 30px',
        borderRadius: '5px',
        border: 'solid 1px #21B6A8',
        backgroundColor: '#21B6A8',
        color: 'white',
        fontFamily: [
            'Montserrat',
          ].join(','),
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            padding: '15px 25px',
            fontSize: [14, "!important"],
        },
        '&:hover': {
            backgroundColor: '#fff',
            border: 'solid 1px #21B6A8',
            color: '#21B6A8',
        },
    }
})