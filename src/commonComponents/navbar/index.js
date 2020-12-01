import React from 'react';
import {style} from './style.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import img from '../../assets/img.jpg';
import logo from '../../assets/logo.png';


export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} style={style.logo} />
          <Typography style={style.title}></Typography>
          < SearchIcon style={style.icon} />
         <LanguageIcon  style={style.icon} />
         <Typography  style={style.icon}  variant="subtitle1">
          Muhammad
         </Typography>
         <img style={style.img} src={img} />
        </Toolbar>
    
      </AppBar>
    </div>
  );
}