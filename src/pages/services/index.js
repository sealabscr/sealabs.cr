import { Box, Grid, } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import React from 'react';
import { URL_IMAGES } from '../../constants';
import clsx from 'clsx';
import fontsStyles from '../../styles/fontStyles';
import styles from './styles';
import ItemWithIcon from '../../components/ItemWithIcon'

const Services = () => {
  const classes = styles()
  const fontClasses = fontsStyles()

  const ServicesComponent = () => {
    return (
      <Box className={classes.servicesWrapper}>
        <Box className={classes.servicesContentWrapper}>
          <Box>
            <h2 className={fontClasses.h2}>Our <b className={fontClasses.colorBlue}>Services</b> </h2>
            <p className={clsx(fontClasses.p, classes.headerSubtitle)}>Through our different quality services, we can guide your business to improve in different areas. At Sealabs we try to take our clients ideas to help them innovate their business and establish themselves in the digital world.</p>
            <Box className={classes.servicesBoxContent}>
              <Grid container spacing={8}>
                <Grid item sm={12} md={4}>
                  <ItemWithIcon 
                    icon={<EngineeringOutlinedIcon className={classes.buttonIcon} /> } 
                    title="Software Engineers"
                    content="With quality engineers, we ensure that the construction of your products or ideas is done in the best way."
                  />
                </Grid>
                <Grid item sm={12} md={4}>
                  <ItemWithIcon 
                    icon={<FormatListBulletedOutlinedIcon className={classes.buttonIcon} /> } 
                    title="Project managers"
                    content="At Sealabs we make sure we have professionals who will guide you through the life cycle of your project, from its inception to its completion."
                  />
                </Grid>
                <Grid item sm={12} md={4}>
                  <ItemWithIcon 
                    icon={<TaskOutlinedIcon className={classes.buttonIcon} /> } 
                    title="Quality Assurance Engineers"
                    content="We take care of the quality of each of our client's products or projects. Thus ensuring a final result in the best possible conditions."
                  />
                </Grid>
                <Grid item sm={12} md={4}>
                  <ItemWithIcon 
                    icon={<AccountTreeIcon className={classes.buttonIcon} /> } 
                    title="DevOps & architecture"
                    content="We take care of automating processes and infrastructure in the cloud while ensuring continuous delivery and seamless integration to bring your product to the digital market."
                  />
                </Grid>
                <Grid item sm={12} md={4}>
                  <ItemWithIcon 
                    icon={<DesignServicesIcon className={classes.buttonIcon} /> } 
                    title="UX/UI Designers"
                    content="We take care of designing the best experience to satisfy our clients needs. Whether you need an app designed from scratch or an upgrade for an existing interface, our team ensures that project objectives are met."
                  />
                </Grid>
                <Grid item sm={12} md={4}>
                  <ItemWithIcon 
                    icon={<SupportAgentIcon className={classes.buttonIcon} /> } 
                    title="Support"
                    content="We can provide support for different needs and problems, helping our customers with the highest quality treatment."
                  />
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
        <ServicesComponent />
    </Box>
  );
}

export default Services
