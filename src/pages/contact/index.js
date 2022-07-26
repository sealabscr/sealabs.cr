import { Box, Grid, } from '@mui/material';

import CustomSecondaryButton from '../../components/CustomSecondaryButton'
import clsx from 'clsx';
import fontsStyles from '../../styles/fontStyles';
import styles from './styles';

const Contact = () => {
    const classes = styles()
    const fontClasses = fontsStyles()

    const Header = () => {
        return (
            <Box className={classes.headerWrapper}>
              <Box className={classes.headerContentWrapper}>
                <Box>
                  <h1 className={fontClasses.h1}>How Can We Help You?</h1>
                  <p className={clsx(fontClasses.p, classes.headerSubtitle)} >We will be happy to help you and appreciate you selecting us for any business need you want to target. Use the bottom bellow to explore our services:</p>
                  <Box className={classes.headerButtonsBox}>
                    <CustomPrimaryButton label="Services" url={"/services"} icon={<ArrowForwardIosIcon className={classes.buttonIcon} /> }/> 
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        }

    const ContactUs= () => {
    
    }

    return (
        <Box>
            <Header />
            <ContactUs />
        </Box>
    );

}

export default Contact;