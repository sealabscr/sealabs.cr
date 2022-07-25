import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import fontsStyles from '../../styles/fontStyles';
import useStyles from './styles';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';

import { URL_IMAGES } from '../../constants';


const navBarItems = [
  {
    label: 'Services',
    path: '/services',
    icon: <SettingsSuggestOutlinedIcon />
  },
  {
    label: 'About',
    path: '/about',
    icon: <HomeWorkOutlinedIcon />
  },
  {
    label: 'Careers',
    path: '/careers',
    icon: <WorkOutlineRoundedIcon />
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: <AccountCircleOutlinedIcon />
  },
]


export default function NavbarWrapper(props) {
  const classes = useStyles()
  const fontClasses = fontsStyles()
  const location = useLocation()
  const [pathname, setPathname] = useState("")
  const [drawer, setDrawer] = useState(false)

  const openDrawer = () => {
    setDrawer(true)
  }

  const closeDrawer  = () => {
    setDrawer(false)
  }

  useEffect(() => {
    setPathname(location.pathname)
  }, [location])

  return (
    <Box className={classes.navbarWrapper}>
      <Box className={classes.navbarContent}>
        <Grid container >
          <Grid item md={2} >
            <Box sx={{ display : 'flex', gap: '10px'}}>
              <Box className={classes.navbarHamburgerMenuBox} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'} }}>
                <IconButton aria-label="delete" onClick={openDrawer}>
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box className={classes.navBarLogo}>
                <Link to="/">
                  <img style={{width: '100%'}} src={URL_IMAGES.URL_LOGO_SEALABS_BLUE} alt ="sealabs logo" />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item md={10} className={classes.navbarItemsBox} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'} }}>
            {navBarItems.map((item) => (
              <Link key={item.path} className={pathname === item.path? classes.navbarItemActive: classes.navbarItem} to={item.path} >{item.label}</Link>
            ))}
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'} }}>
        <Drawer
          anchor='left'
          open={drawer}
          onClose={closeDrawer}
          style={{zIndex: -1}}
        >
          <Box className={classes.listDrawerBox}>
            <List >
              {navBarItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <Link to={item.path} style={{width: '100%', textDecoration: 'none'}}>
                    <ListItemButton sx={{backgroundColor: pathname === item.path? '#EFF5FF': 'white'}} t>
                      <ListItemIcon className={classes.listItemIcon} sx={{minWidth: '40px'}}>
                      {item.icon}
                      </ListItemIcon>
                      <ListItemText 
                      disableTypography
                      primary={<p className={fontClasses.p} style={{ color: '#151B25', fontWeight: 500 }}>{item.label}</p>}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
