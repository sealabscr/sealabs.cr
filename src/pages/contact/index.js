import { Box, Grid, } from '@mui/material';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import fontsStyles from '../../styles/fontStyles';
import styles from './styles';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import InputLabel from '@material-ui/core/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const classes = styles()
    const fontClasses = fontsStyles()

    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: 'SeaLabs',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e) => {
      e.preventDefault();
      send(
        'service_a2y8fcc',
        'template_5s9qcau',
        toSend,
        'Uq23CMYx_44T40imb'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    };
  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const ServicesArea= () => {
      return (
        <Box className={classes.servicesWrapper}>
        <Box className={classes.servicesContentWrapper}>
          <Box>
            <h1 className={fontClasses.h1}>How Can We Help You?</h1>
            <p className={clsx(fontClasses.p, classes.headerSubtitle)}>We will be happy to help you and appreciate you selecting us for any business need you want to target. Use the bottom below to explore our services:</p>
            <Box className={classes.headerButtonsBox}>
              <CustomPrimaryButton label="Services" url={"/services/"} icon={<ArrowForwardRoundedIcon className={classes.buttonIcon} /> }/> 
            </Box>
          </Box>
        </Box>
      </Box>
      );
    }

    const SendEmail= ()=> {

      return (
        <Box className={classes.sendEmailWrapper}>
          <Box className={classes.sendEmailContentWrapper}>
              <Box className={classes.sendEmailContent}>
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>  
                            <TextField fullWidth name='from_name' value={toSend.from_name} onChange={handleChange} id="standard-basic" label="Full Name" variant='standard'/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField fullWidth id="standard-basic" label="Last Name" variant='standard'/>
                        </Grid>  
                        <Grid item xs={12} sm={12} md={6}>  
                            <TextField fullWidth id="standard-basic" label="Phone" variant='standard'/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                        <FormControl variant="standard" sx={{ minWidth: 120, width: '100%'}}>
                          <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                          <Select
                            labelId="id-country-label"
                            id="id-country-label"
                            value={1}
                            label="Country"
                            style={{marginTop: '0px'}}
                            fullWidth
                          >
                            <MenuItem value={1}>Costa Rica</MenuItem>
                          </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>  
                            <TextField name='reply_to' value={toSend.reply_to} onChange={handleChange} fullWidth id="standard-basic" label="Email" variant='standard'/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>  
                            <TextField 
                              id="standard-multiline-static"
                              label="Message"
                              multiline
                              minRows= {3}
                              placeholder="Write a message"
                              variant='standard'
                              fullWidth
                              name='message' value={toSend.message} onChange={handleChange}
                            />
                        </Grid>      
                    </Grid>
                    <Grid className={classes.placingEnd} container spacing={4}>
                      <Grid item xs={12} sm={12} md={8} className={classes.sendEmailBtn}>  
                          <Box className={classes.sendEmailAgreeText}> 
                            <p className={classes.sendEmailText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} className={classes.sendEmailBtn}>  
                          <Box className={classes.sendEmailBtn}>
                          {/* <button type='submit'>Submit</button> */}
                          <CustomPrimaryButton type='submit' label="Submit" url={""} icon={<ArrowForwardRoundedIcon className={classes.buttonIcon} /> }/> 
                          </Box>
                        </Grid>

                    </Grid>
                    </form>
              </Box>
            </Box>
        </Box>
      );
    }

    return (
        <Box>
            <ServicesArea />
            <SendEmail/>
        </Box>
    );

}

export default Contact;