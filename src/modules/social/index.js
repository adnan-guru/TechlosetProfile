import React from 'react';
import { style } from './style.js';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Social() {
  return (
    <Container>
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={4} xs={12} style={style.iconalign}>
        <Avatar style={style.icon}>
          <FacebookIcon />
        </Avatar>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Facebook Address"
          />
               <Avatar style={style.icon}>
          <TwitterIcon />
        </Avatar>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Twitter Address"
          />
               <Avatar style={style.icon}>
          <LinkedInIcon />
        </Avatar>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="LinkedIn Address"
          />
               <Avatar style={style.icon}>
          < InstagramIcon />
        </Avatar>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Instagram Address"
          />
     </Grid>
        <Grid item md={4}></Grid>
      </Grid>

    </Container>
  );
}