import React from 'react'
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import fontsStyles from '../../styles/fontStyles';
import useStyles from './styles';
import clsx from 'clsx';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TeamCard = ( { name, image, title, content }) => {
  const fontClasses = fontsStyles()
  const classes = useStyles()

  return ( 
    <Box className={classes.cardBox}>
        <Box className={classes.imageBox}>
            
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/877B/production/_126038643_gettyimages-1048896140.jpg" alt="Girl in a jacket" width="570" height="400"></img>
        </Box>
        <Box >
          <p className={fontClasses.p}><b>{name}</b></p>
          <p className={fontClasses.p}><b>{title}</b></p>
                  
          {<LinkedInIcon className={classes.buttonIcon} /> }
          
        </Box>
        <Box className={classes.contentBox}>
            <p className={clsx(fontClasses.p, classes.contentText)}>{content}</p>
        </Box>
    </Box>
  );
}

export default TeamCard;