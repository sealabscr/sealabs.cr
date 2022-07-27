import React from 'react';
import clsx from 'clsx';

import { Box, Grid } from '@mui/material';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


import fontsStyles from '../../styles/fontStyles';
import styles from './styles';

const Careers = () => {
  const classes = styles()
  const fontClasses = fontsStyles()

  const Header = () => {
    return (
      <Box className={classes.careerWrapper}>
        <Box className={classes.careerContentWrapper}>
          <Box>
            <h1 className={fontClasses.h1}>Current Job Openings </h1>
            <p className={clsx(fontClasses.p, classes.headerSubtitle)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Box className={classes.headerButtonsBox}>
              <CustomPrimaryButton label="Linkedin" url={"https://www.linkedin.com/company/sealabscr/"} icon={<LinkedInIcon className={classes.buttonIcon} /> }/> 
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  const FormComponent = () => {
    return (
      <Box className={classes.formWrapper}>
        <Box className={classes.formContentWrapper}>
          <Box className={classes.searchComponent}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={3}>
                <FormControl variant="standard" sx={{ minWidth: 120, width: '100%'}}>
                  <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                  <Select
                    labelId="id-country-label"
                    id="id-country-label"
                    value={1}
                    label="Age"
                    style={{marginTop: '20px'}}
                  >
                    <MenuItem value={1}>Costa Rica</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <FormControl variant="standard" sx={{ minWidth: 120, width: '100%'}}>
                  <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
                  <Select
                    labelId="id-country-label"
                    id="id-country-label"
                    value={1}
                    label="Age"
                    style={{marginTop: '20px'}}
                    
                  >
                    <MenuItem value={1}>Technology</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <FormControl variant="standard" sx={{ minWidth: 120, width: '100%'}}>
                  <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                  <Select
                    labelId="id-country-label"
                    id="id-country-label"
                    value={1}
                    label="Age"
                    style={{marginTop: '20px'}}
                  >
                    <MenuItem value={1}>Remote</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Box className={classes.filterBox}>
                  <p className={clsx(fontClasses.p, classes.filterButton)}>Clear filters</p>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.resultsBox}>
            <Box className={classes.insideContent}>
              <h3 className={fontClasses.h3}>Lorem Ipsum</h3>
              <p className={clsx(fontClasses.p, classes.filterButton)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
        <Header />
        <FormComponent />
    </Box>
  );
}

export default Careers
