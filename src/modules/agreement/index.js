import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import img from '../../assets/agreement.jpg';

function Agreement() {
    return (
        <Grid container style={style.main}>
            <Grid item md={2}></Grid>
            <Grid md={8} x={10}>
                <img src={img} alt="agreement" style={style.img} />
            </Grid>
            <Grid item md={2}> </Grid>
        </Grid>
    )
}
export default Agreement;
