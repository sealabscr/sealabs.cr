import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0077FF',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const CustomButtonPrimary = () => {
  return ( 
    <ThemeProvider theme={theme}>
     <Button 
        color="primary"
        variant="contained"
        disableElevation
        endIcon={<SendIcon />}
        size="large"
        style={{width: '120px', height: '40px', borderRadius: '5px'}}
    >
        Submit
    </Button>
    </ThemeProvider>
    
  );
}

export default CustomButtonPrimary;