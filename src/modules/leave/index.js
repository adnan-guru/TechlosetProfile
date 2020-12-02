import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Leave() {
    return (
        <Grid container >
            <Grid item md={2} xs={2}></Grid>
            <Grid item md={8} xs={12}>
                <TextField
                    style={{ margin: 8 }}
                    placeholder="Name"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    InputLabelProps={{ shrink: true, }}
                    variant="filled"
                />
                <TextField
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    InputLabelProps={{ shrink: true, }}
                    variant="filled"
                />
                <TextField
                    style={{ margin: 8 }}
                    placeholder="Phone"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    InputLabelProps={{ shrink: true, }}
                    variant="filled"
                />

                <TextField
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    type="date"
                    color="secondary"
                    InputLabelProps={{ shrink: true, }}
                    variant="filled"
                />
                <TextField
                    style={{ margin: 8 }}
                    placeholder="Enter Your Message"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    InputLabelProps={{ shrink: true, }}
                    variant="filled"
                />
                <Button style={style.button} variant="contained" color="primary">Submint</Button>
            </Grid>
            <Grid item md={2} xs={2}></Grid>
        </Grid>
    )
}
export default Leave;