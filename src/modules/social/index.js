import React from 'react';
import { style } from './style.js';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InputAdornment from "@material-ui/core/InputAdornment";


export default function Social() {
  
  return (
      <Grid container style={style.main}>
        <Grid item md={4}></Grid>
        <Grid item md={4} xs={12} >
          <TextField style={style.icontop}
            label="Enter Facebook Address"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                    <Avatar style={style.icon}>
                      <FacebookIcon style={style.padding} />
                    </Avatar>
                </InputAdornment>
              )
            }}
          />
             <TextField style={style.icontop}
            label="Enter Twitter Address"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                    <Avatar style={style.icon}>
                      <TwitterIcon />
                    </Avatar>
               </InputAdornment>
              )
            }}
          />
             <TextField style={style.icontop}
            label="Enter Instagrame Address"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                    <Avatar style={style.icon}>
                    <InstagramIcon />
                    </Avatar>
                </InputAdornment>
              )
            }}
          />
              <TextField style={style.icontop}
            label="Enter Whattsapp Number"
            variant="outlined"
            multiline
            rowsMax={4}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                    <Avatar style={style.icon}>
                    < WhatsAppIcon />
                    </Avatar>
                </InputAdornment>
              )
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={style.submit}
          >
            submit
          </Button>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
  );
}