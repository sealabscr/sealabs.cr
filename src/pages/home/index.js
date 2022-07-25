import { Box, Grid, } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import CustomSecondaryButton from '../../components/CustomSecondaryButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { URL_IMAGES } from '../../constants';
//import Layout from '@theme/Layout';
import clsx from 'clsx';
import fontsStyles from '../../styles/fontStyles';
import styles from './styles';

const Home = () => {
  const classes = styles()
  const fontClasses = fontsStyles()

  const Header = () => {
    return (
      <Box className={classes.headerWrapper}>
        <Box className={classes.headerContentWrapper}>
          <Box>
            <h1 className={fontClasses.h1}>Improve your business <br/> through <b className={fontClasses.colorBlue}>digital transformation</b> </h1>
            <p className={clsx(fontClasses.p, classes.headerSubtitle)} >We build personalized software solutions to suit your business needs ensuring quality and transparency.</p>
            <Box className={classes.headerButtonsBox}>
              <CustomPrimaryButton label="Services" url={"/services"} icon={<ArrowForwardIosIcon className={classes.buttonIcon} /> }/> 
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  const ProjectManagement = () => {
    return (
      <Box className={classes.projectMangWrapper}>
        <Box className={classes.projectMangContentWrapper}>
          <Box className={classes.insideContent}>
            <Box className={classes.pmText}>
              <h1 className={fontClasses.h2} style={{textAlign: 'center'}}>Project managment <b className={fontClasses.colorBlue}>life cicle</b> </h1>
              <p className={clsx(fontClasses.p, classes.pargrahpCenter)} >We will help your business grow by creating customizable and high-quality software for an efficient streamlining of processes.</p>
            </Box>
            <Box className={classes.pmImage}>
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'} }}>
                <img style={{width: '100%'}} src={URL_IMAGES.VECTOR_PM_SECTION} alt ="Project managnmet life cicle" />
              </Box>
              <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'} }}>
                <img style={{width: '100%'}} src={URL_IMAGES.VECTOR_PM_SECTION_VERTICAL} alt ="Project managnmet life cicle" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  const StrategicLocation = () => {
    return (
      <Box className={classes.strategicLocationWrapper}>
        <Box className={classes.strategicLocationContentWrapper}>
          <Box className={clsx(classes.insideContent, classes.strategicLocationContent)}>
            <Box>
              <h1 className={clsx(fontClasses.h2, classes.stLocationTitleText)}>We Are Located In a <br /><b className={fontClasses.colorBlue}>Strategic Location</b> </h1>
              <p className={clsx(fontClasses.p, classes.stLocationText)} >We will help your business grow by creating customizable and high-quality software for an efficient streamlining of processes.</p>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  const WorkWithUs = () => {
    return (
      <Box className={classes.workWithUsWrapper}>
        <Box className={classes.workWithUsContentWrapper}>
          <Box>
            <Grid container>
              <Grid item md={4} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'} }}>
                <Box >
                  <img style={{width: '100%'}} src={URL_IMAGES.VECTOR_DEVICES_WHITE} alt ="Project managnmet life cicle" />
                </Box>
              </Grid>
              <Grid md={1} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'} }}/> 
              <Grid item md={7} sm={12}>
                <Box>
                  <h1 className={clsx(fontClasses.h2)}>Start Working <b className={fontClasses.colorBlue}>With Us</b> </h1>
                  <p className={clsx(fontClasses.p)}>Our main goal is to provide our clients with the best service performance and come up with solutions for their digital transformation.</p>
                </Box>
                <Box className={classes.headerButtonsBox}>
                  <CustomPrimaryButton label="Services" url={"/services"} icon={<ArrowForwardIosIcon className={classes.buttonIcon} /> }/> 
                  <CustomSecondaryButton label="Linkedin" url={"https://www.linkedin.com/company/sealabscr/"} icon={<LinkedInIcon className={classes.buttonIconSecondary} /> }/> 
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
        <Header />
        <ProjectManagement />
        <StrategicLocation />
        <WorkWithUs />
    </Box>
  );
}

export default Home
