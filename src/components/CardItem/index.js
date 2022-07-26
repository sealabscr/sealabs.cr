import React from 'react'
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import fontsStyles from '../../styles/fontStyles';
import useStyles from './styles';
import clsx from 'clsx';

const ItemWithIcon = ( { icon, title, content }) => {
  const fontClasses = fontsStyles()
  const classes = useStyles()

  return ( 
    <Box className={classes.cardbox}>
      <Box>
        <p className={fontClasses.p}><b>{title}</b></p>
        <p className={clsx(fontClasses.p, classes.contentText)}>{content}</p>
      </Box>
    </Box>
    
  );
}

export default ItemWithIcon;