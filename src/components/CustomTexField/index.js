import React from 'react'
import TextField from '@mui/material/TextField';

const CustomTextField = () => {
  return ( 
    <TextField
        id="outlined-required"
        label="Email"
        margin='none'
        size='small'
        fullWidth
    />
  );
}

export default CustomTextField;