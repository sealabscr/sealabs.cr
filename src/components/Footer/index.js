import React  from 'react';
import { Link } from "react-router-dom";
import fontsStyles from '../../styles/fontStyles';
import useStyles from './styles';
import clsx from "clsx"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CustomTextField from '../../components/CustomTexField';
import CustomButtonPrimary from '../../components/CustomButtonPrimary';

import { URL_IMAGES } from '../../constants';


export default function FooterWrapper(props) {
  const classes = useStyles()
  const fontClasses = fontsStyles()

  return (
    <Box className={classes.footerWrapper}>
      <Box className={classes.footerContent}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <h3 className={clsx(fontClasses.h3,fontClasses.colorBlue)}>Subscribe to our newsletter</h3>
            <Box>
              <Box className={classes.newsLetterBox}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <CustomTextField />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CustomButtonPrimary />
                  </Grid>
                </Grid>
                <p className={classes.newsletterMessage}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <h3 className={clsx(fontClasses.h3,fontClasses.colorBlue)}>Company</h3>
            <Box className={classes.footerItemBox}>
              <p className={classes.footerLinks}><Link to={"/services"} className={clsx(classes.footerLinks)}>Services</Link></p>
              <p className={classes.footerLinks}><Link to={"/about"} className={clsx(classes.footerLinks)}>About us</Link></p>
              <p className={classes.footerLinks}><Link to={"/careers"} className={clsx(classes.footerLinks)}>Careers</Link></p>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <h3 className={clsx(fontClasses.h3,fontClasses.colorBlue)}>Conect</h3>
            <Box className={classes.footerItemBox}>
              <p className={classes.footerLinks}><Link to={"/contact"} className={clsx(classes.footerLinks)}>Contact</Link></p>
              <p className={classes.footerLinks}><Link to={"https://www.google.com/maps/place/Lim%C3%B3n/@9.9918421,-83.0602886,14z/data=!3m1!4b1!4m5!3m4!1s0x8fa705367150d903:0x24d864fd050c815f!8m2!3d9.9913106!4d-83.0415078"} className={clsx(classes.footerLinks)}>Puerto Limón , Costa Rica</Link></p>
              <p className={classes.footerLinks}><Link to={"tel:+50687202621"} className={clsx(classes.footerLinks)}>(+506)  8720 2621</Link></p>
              <p className={classes.footerLinks}><Link to={"mailto: abc@example.com"} className={clsx(classes.footerLinks)}>hello@sealabs.cr</Link></p>
            </Box>
          </Grid>
        </Grid>
        <hr className={classes.divisorLine}/>
        <Grid container>
          <Grid item md={4} xs={12}>
            <Box className={classes.footerLogoBox}>
              <Link to="/">
                <img src={URL_IMAGES.URL_LOGO_SEALABS_DARK} alt ="Sealabs logo" className={classes.footerLogo}/>
              </Link>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className={classes.footerSocialBox}>
                <Link to={"https://www.linkedin.com/company/sealabscr"}>
                  <p className={classes.socialIcon}><LinkedInIcon style={{fontSize: '30px'}}/></p>
                </Link> 
                <Link to={"https://github.com/sealabscr"}>
                  <p className={classes.socialIcon}><GitHubIcon style={{fontSize: '30px'}}/></p>
                </Link> 
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <p className={classes.footerRights}>All rights reserved Sealabs Technologies</p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
