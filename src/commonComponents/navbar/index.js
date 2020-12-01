import React from 'react';
import {style} from './style.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import img from '../../assets/img.jpg';



export default function Navbar() {
  return (
    <div style={style.main}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={style.title}>
            News
          </Typography>
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