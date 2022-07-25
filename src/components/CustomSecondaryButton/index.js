import React from 'react'
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import fontsStyles from '../../styles/fontStyles';
import useStyles from './styles';

const CustomSecondaryButton = ( { label, icon, url }) => {
  const fontClasses = fontsStyles()
  const classes = useStyles()

  return ( 
    <Link to={url} style={{textDecoration: 'none'}}>
      <button className={classes.buttonMainStyle}>
        <p className={fontClasses.secondaryButtonText}>{label}</p>
        <Box className={classes.iconButtonBox}>
          {icon}
        </Box>
      </button>
    </Link>
    
  );
}

export default CustomSecondaryButton;