import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
function Leave() {
    return (
        <Grid container >
            <Grid item md={2} xs={2}></Grid>
            <Grid item md={8} xs={12}>
                <Typography style={style.heading} variant='h3'>
                    Leave Page
               </Typography>
                <input style={style.inputs} type="text" placeholder="NAME" />
                <input style={style.inputs} type="text" placeholder="EMAIL" />
                <input style={style.inputs} type="text" placeholder="PHONE" />
                <input style={style.inputs} type="date" />
                <textarea style={style.option} cols="40" rows="10" placeholder="Enter Your Message" />
                <Button variant="contained" color="primary">Submint</Button>
            </Grid>
            <Grid item md={2} xs={2}></Grid>
        </Grid>


    )
}
export default Leave;