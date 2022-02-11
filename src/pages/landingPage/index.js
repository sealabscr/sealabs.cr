import React, { useEffect, useRef, useState } from 'react'

import Box from '@mui/material/Box'
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import { URL_IMAGES } from '../../constants'
import Waves from '../../components/waves/inedx'
import useStyles from './styles'

const LandingPage = () => {
  const classes = useStyles()

  const refHome = useRef(null)
  const refAbout = useRef(null)
  const refServices = useRef(null)
  const refContact = useRef(null)

  const goToHome = () => refHome.current.scrollIntoView({block: "start", behavior: "smooth"})
  const goToAbout = () => refAbout.current.scrollIntoView({block: "start", behavior: "smooth"})
  const goToServices = () => refServices.current.scrollIntoView({block: "start", behavior: "smooth"})
  const goToContact = () => refContact.current.scrollIntoView({block: "start", behavior: "smooth"})

  const Navbar = () => {
    const [navbarActive, setNavbar] = useState(false)

    const changeBackground = () => {
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    useEffect(() => {
      changeBackground()
      window.addEventListener("scroll", changeBackground)
    })

    return (
      <Box className={navbarActive? classes.nabarWrapper: classes.nabarWrapperWhite}>
          <Box className={classes.nabarContentWrapper}>
              <Grid container >
                <Grid xs={12} md={6}>
                  <Box className={classes.logoWrapper}>
                    {!navbarActive && 
                      <img className={classes.logo} src={URL_IMAGES.URL_LOGO_SEALABS_WHITE} alt ="sealabs logo" />
                    }
                    {navbarActive && 
                      <img className={classes.logo} src={URL_IMAGES.URL_LOGO_SEALABS} alt ="sealabs logo" />
                    }
                  </Box>
                </Grid>
                <Grid md={6} display={{ xs: "none", sm: 'none',  md: "block" }}>
                  <Box className={classes.navbarLinkWrapper}>
                    <Typography onClick={goToHome} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>Home</Typography>
                    <Typography  onClick={goToAbout} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>About</Typography>
                    <Typography  onClick={goToServices} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>Services</Typography>
                    <Typography  onClick={goToContact} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>Contact</Typography>
                  </Box>
                </Grid>
              </Grid>
          </Box>
      </Box>
    )
  }

  const Header = () => {
    return (
      <Box className={classes.headerWrapper} ref={refHome}>
          <Box className={classes.headerContentWrapper}>
            <Typography variant="h1" component="h1" gutterBottom className={classes.mainHerderTitle}>
              Improve your business <br /> through digital transformation
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={classes.mainHederText} >
              We build personalized software solutions to suit your business needs ensuring quality and transparency. 
            </Typography>
            <Box>
                <button onClick={goToServices} className={classes.primaryButtonWhite}>Services</button>
                <button onClick={goToContact}className={classes.secundaryButtonWhite}>Contact</button>
            </Box>
          </Box>
          <Waves />
      </Box>
    )
  }

  const AboutUs = () => {
    return (
      <Box className={classes.aboutWrapper} ref={refAbout}>
          <Box className={classes.aboutContentWrapper}>
            <Typography variant="h1" component="h1"  color="primary">
                About us
            </Typography>
            <Box style={{marginTop: '50px'}}>
              <Grid container rowSpacing={8} columnSpacing={{ xs:12,  sm: 12, md: 12 }}>
                <Grid item xs={12} md={12}>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px'}}>Who we are</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify'}}>
                    We are a software development startup located in Limón, Costa Rica. Our goal is to position ourselves in the technology industry and strive to be recognized for providing quality services in a transparent and efficient manner.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px'}}>Mission</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify'}}>
                    We are passionate about local growth, so that through an exceptional service in software development we can expand and facilitate our customers’ tasks efficiently, safely and reliably.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h2" color="secondary" style={{marginBottom: '30px'}}>Vision</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify'}}>
                    We want to promote the growth of Limón province through new technologies by involving businesses to improve and streamline processes. 
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Box>
    )
  }

  const CallToAction1 = () => {
    return (
      <Box className={classes.callToActionWrapper}>
          <Box className={classes.headerContentWrapper}>
            <Typography variant="h1" component="h1" gutterBottom style={{color: '#fff'}}>
              What can we do for you?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={classes.mainTextCallToAction} >
            We will help your business grow by creating customizable and high-quality software for an efficient streamlining of processes.
            </Typography>
            <Box>
                <button onClick={goToContact} className={classes.primaryButton2White} >Contact us</button>
                <button onClick={goToServices} className={classes.secundaryButton2White}>Services</button>
            </Box>
          </Box>
      </Box>
    )
  }

  const Services = () => {
    return (
      <Box className={classes.aboutWrapper} ref={refServices}>
          <Box className={classes.aboutContentWrapper}>
            <Typography variant="h1" component="h1"  color="primary">
                Services
            </Typography>
            <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify', marginTop: '50px'}}>
              We offer the following services for our clients:
            </Typography>
            <Box style={{marginTop: '10px'}}>
              <Grid container rowSpacing={3} columnSpacing={{ xs:12,  sm: 12, md: 12 }}>
                <Grid item xs={12} md={4}>
                  <Box className={classes.boxIcons}>
                    <CodeIcon color='secondary' className={classes.icons} />
                  </Box>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px', textAlign: 'center'}}>Software Development</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'center'}}>
                    Customizable software development
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={classes.boxIcons}>
                    <BuildIcon color='secondary' className={classes.icons} />
                  </Box>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px', textAlign: 'center'}}>Software Maintenance</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'center'}}>
                    Maintenance and support for software aplications
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={classes.boxIcons}>
                    <CompareArrowsIcon color='secondary' className={classes.icons} />
                  </Box>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px', textAlign: 'center'}}>Software Migration</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'center'}}>
                    We help you migrate your application to a new environment
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Box>
    )
  }

  const Technologies = () => {
    return (
      <Box className={classes.techWrapper}>
          <Box className={classes.techContentWrapper}>
            <Typography variant="h1" component="h1"  color="primary">
              Technologies
            </Typography><Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify', marginTop: '50px'}}>
              Our team have experience with the following technologies:
            </Typography>
            <Box style={{marginTop: '50px'}}>
              <Grid container rowSpacing={3} columnSpacing={{ xs:12,  sm: 12, md: 12 }}>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                    <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_REACT} alt ="sealabs logo" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                    <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_MAGENTO} alt ="sealabs logo" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                    <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_JS} alt ="sealabs logo" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                   <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_POSTGRESQL} alt ="sealabs logo" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Box>
    )
  }

  const WorkWithUs = () => {
    return (
      <Box className={classes.workWithUsWrapper} ref={refContact}>
          <Box className={classes.workWithUsContentWrapper}>
            <Grid container >
              <Grid xs={12} md={6}>
                <Typography variant="h1" component="h1" color="secondary" gutterBottom>
                  Start working with us
                </Typography>
                <Typography variant="body1" component="p"  color="secondary" >
                  Our main goal is to provide our clients with the best service performance and come up with solutions for their digital transformation.
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Box className={classes.workButtonsWrapper}>
                  <a href={"mailto:hello@sealabs.cr?subject=Hi, Let's talk!"}>
                    <button  className={classes.primaryButtonBlue} >Email</button>
                  </a>
                  <a href={"https://www.linkedin.com/company/sealabscr"}  target="_blank">
                    <button  className={classes.secundaryButtonBlue}>Linkedin</button>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Box>
      </Box>
    )
  }

  const Footer = () => {
    return (
      <Box className={classes.footerWrapper}>
          <Box className={classes.footerContentWrapper}>
            <Grid container >
              <Grid xs={12} md={6} style={{marginBottom: '20px'}}>
                <Box className={classes.logoWrapper}>
                      <img className={classes.logo} src={URL_IMAGES.URL_LOGO_SEALABS_WHITE} alt ="sealabs logo" />
                  </Box>
              </Grid>
              <Grid xs={12} md={3} style={{marginBottom: '20px'}}>
                <Typography variant="h2" component="h2" style={{color: '#fff', marginBottom: '20px'}} >
                  Navigation
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToHome}>
                  Home
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToAbout}>
                  About
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToServices} >
                  Services
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToContact} >
                  Contact
                </Typography>
              </Grid>
              <Grid xs={12} md={3} style={{marginBottom: '20px'}}>
                <Typography variant="h2" component="h2" style={{color: '#fff', marginBottom: '20px'}} >
                  Contact
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}}>
                  Puerto Limón , Costa Rica
                </Typography> 
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}}>
                  <a href={"tel:+50687202621"} style={{textDecoration: 'none', color: '#fff'}}>+506 87202621</a>
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} >
                  <a href={"mailto:hello@sealabs.cr?subject=Hi, Let's talk!"} style={{textDecoration: 'none', color: '#fff'}}>hello@sealabs.cr</a>
                </Typography>
                <Box className={classes.iconButtonWrapper}>
                    <IconButton size="large">
                      <a href={"https://github.com/sealabscr/sealabs.cr"} target="_blank">
                        <GitHubIcon style={{color: '#fff', fontSize: '40px'}}/>
                      </a>
                    </IconButton>
                    <IconButton size="large">
                      <a href={"https://www.linkedin.com/company/sealabscr"} target="_blank">
                        <LinkedInIcon style={{color: '#fff', fontSize: '40px'}}/>
                      </a>
                    </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
      </Box>
    )
  }

  const FooterCopyright = () => {
    return (
      <Box className={classes.copyrightWrapper}>
          <Box className={classes.copyrightContentWrapper}>
            <Typography variant="body1" component="p" color="secondary">
              All rights reserved Sealabs Technologies
            </Typography>
          </Box>
      </Box>
    )
  }


  
  return (    
    <Box>
        <Navbar />
        <Header />
        <AboutUs />
        <CallToAction1 /> 
        <Services /> 
        <Technologies />  
        <WorkWithUs />
        <Footer />
        <FooterCopyright />
    </Box>
  );
}

export default LandingPage;