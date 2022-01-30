import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@mui/material/Box'
import {Helmet} from "react-helmet";

import styles from './styles'
import sealabsLogo from '../../assets/logos/sealabs.png'
import underConstructionVector from '../../assets/underConstruction.png'
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
      <Box className={classes.contentWrapper}>
        <Box className={classes.imageWrapper}>
          <img className={classes.img} src={underConstructionVector} alt='construction image'/>
        </Box>
        <Box>
          <h1 className={classes.title}>Site under construction</h1>
          <p className={classes.text}>
            This site is currently under maintenance, thank you for visiting us.
            <br />
            <br />
            For any other information you can contact us.
          </p>
        </Box>
        <a className={classes.contactButton} href="mailto:jean.vega@sealabs.cr?cc=joss.johnson@sealabs.cr&subject=Hi, Let's talk!">CONTACT US</a>
      </Box>
    )
  }

  return (
    <Box>
      <Helmet>
        <title>Sealabs Technology</title>
        <meta name="title" content="Sealabs Technology" />
        <meta name="description" content="This site is currently under maintenance, thank you for visiting us." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={MetaData.title} />
        <meta property="og:description"content={MetaData.description} />
        <meta property="og:image" content={MetaData.img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title"  content={MetaData.title} />
        <meta property="twitter:description"  content={MetaData.description} />
        <meta property="twitter:image"  content={MetaData.img} />
      </Helmet>
      <Header />
      <Content />
    </Box>
  );
}

export default UnderConstruction;