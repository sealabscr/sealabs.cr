import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {Helmet} from "react-helmet";

import styles from './styles'
import sealabsLogo from '../../assets/logos/logo_sealabs_blue.png'
import underConstructionVector from '../../assets/underConstructionIlustration.png'
import underConstructionMetaImg from '../../assets/metaimg_underConstruction.png'

const useStyles = makeStyles(styles)

const MetaData={
  title:"Sealabs Technology",
  description:"This site is currently under maintenance",
  img:{underConstructionMetaImg},
}

const UnderConstruction = () => {
  const classes = useStyles()

  const Header = () => {
    return (
      <Box className={classes.wrapper}>
        <Box className={classes.logoWrapper}>
          <img className={classes.img} src={sealabsLogo} alt='logo image'/>
        </Box> 
      </Box>
    )
  }

  const Content = () => {
    return (
      <Box className={classes.wrapper}>
        <Box className={classes.wrapperContent}>
          <Box className={classes.logoWrapper}>
            <img className={classes.img} src={sealabsLogo} alt='logo image'/>
          </Box> 
          {/*<img className={classes.img} src={underConstructionVector} alt='construction image'/>*/}
          <Box className={classes.content}>
            <Grid container>
              <Grid item xs={12} md={6} className={classes.leftGrid}>
                <Box>
                  <h1 className={classes.title}>We Are <b className={classes.titleBold}>Under Maintenance</b></h1>
                  <h1 className={classes.title}>See You Soon!</h1>
                  <p className={classes.text}>
                    For any other information you can contact us.
                  </p>
                  <Box className={classes.buttonBox}>
                    <a className={classes.linka} href="https://www.linkedin.com/company/sealabscr/" target="_blank"> <button className={classes.contactButton}>Linkedin</button></a>
                    <a className={classes.linka} href="mailto:hello@sealabs.cr?subject=Hi, Let's talk!" target="_blank"> <button className={classes.contactButton2}>Email</button></a>
                  </Box>
                 
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <img className={classes.vector} src={underConstructionVector} alt='construction image'/>
              </Grid>
            </Grid>
          </Box>  
        </Box>
      </Box>
    )
  }

  return (    
    <Box>
      <Helmet>
        <title>Sealabs Technology</title>
        <meta name="title" content="Sealabs Technologies" />
        <meta name="description" content="This site is currently under maintenance, thank you for visiting us." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={MetaData.title} />
        <meta property="og:description"content={MetaData.description} />
        <meta property="og:image" content={MetaData.img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={MetaData.title} />
        <meta property="twitter:description" content={MetaData.description} />
        <meta property="twitter:image" content={MetaData.img} />
      </Helmet>
      <Content />
    </Box>
  );
}

export default UnderConstruction;