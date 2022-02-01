import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@mui/material/Box'
import styles from './styles'

import Typography from '@mui/material/Typography';

const useStyles = makeStyles(styles)

const LandingPage = () => {
  const classes = useStyles()

  const Header = () => {
    return (
      <Box>
          <Typography variant="h1" component="h1" gutterBottom color="primary">
                h1. Heading
            </Typography>
      </Box>
    )
  }

  
  return (    
    <Box>
        <Header />
    </Box>
  );
}

export default LandingPage;