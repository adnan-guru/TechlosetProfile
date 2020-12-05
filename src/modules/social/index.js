import React from 'react';
import { style } from './style.js';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";


export default function Social() {
  return (
    <Container>
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={4} xs={12} style={style.main}>
          <TextField
            label="Enter Facebook Address"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Avatar style={style.icon}>
                      <FacebookIcon/>
                    </Avatar>
                  </IconButton>
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
                  <IconButton>
                    <Avatar style={style.icon}>
                      <TwitterIcon />
                    </Avatar>
                  </IconButton>
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
                  <IconButton>
                    <Avatar style={style.icon}>
                    <InstagramIcon />
                    </Avatar>
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
              <TextField style={style.icontop}
            label="Enter Your Whattsapp Number"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Avatar style={style.icon}>
                    < WhatsAppIcon />
                    </Avatar>
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {/* <Avatar style={style.icon}>
            < InstagramIcon />
          </Avatar>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Instagram Address"
          /> */}
          <Button
            type="submit"
            //fullWidth
            variant="contained"
            color="primary"
            style={style.submit}
          >
            submit
          </Button>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>

    </Container>
  );
}