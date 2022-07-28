import React from 'react'
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import fontsStyles from '../../styles/fontStyles';
import useStyles from './styles';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TeamCard = ( { name, image, title, content, linkedIn }) => {
  const fontClasses = fontsStyles()
  const classes = useStyles()

  return ( 
    <Box className={classes.cardBox}>
        <Box className={classes.imageBox}>            
            <img className={classes.img} src={image} alt="Team photo"></img>
        </Box>
        <Box className={classes.contentBox}>
          <Box>
            <p className={fontClasses.p}><b>{name}</b></p>
            <p className={clsx(fontClasses.p, fontClasses.colorBlue)}><b>{title}</b></p>                  
            <Link to={linkedIn}>
              <LinkedInIcon className={classes.linkedInIcon} />
            </Link>    
          </Box>
          <Box className={classes.descriptionBox}>
              <p className={clsx(fontClasses.p, classes.contentText)}>{content}</p>
          </Box>
        </Box>
    </Box>
  );
}

export default TeamCard;