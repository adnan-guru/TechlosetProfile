import React from 'react';
import {style} from './style.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import img from '../../assets/img.jpg';
import logo from '../../assets/logo.png';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '../../commonComponents/drawer'


export default function Navbar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <img src={logo} style={style.logo} alt="logo" />
          <Hidden only="xs">
          <Typography style={style.title}></Typography>
          < SearchIcon style={style.icon} />
         <LanguageIcon  style={style.icon} />
         <Typography  style={style.icon}  variant="subtitle1">
          Muhammad
         </Typography>
         <img style={style.img} src={img} alt="profile image" />
         </Hidden>
         <Hidden only={['sm', 'md', 'lg']}>
          <Drawer />
        </Hidden>
        </Toolbar>
  
      </AppBar>
    </div>
  );
}