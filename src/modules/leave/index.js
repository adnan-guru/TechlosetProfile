import React from 'react';
import {style} from './style.js';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Leave(){
    const [value, onChange] = useState(new Date());

    return(
        <Container style={style.main}>
        <Grid container>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={5}>
                <Grid container>
                    <Grid style={style.headingtop} item md={5} xs={5}>
                    <Typography variant="h6">Art Director</Typography>
                        <Typography style={style.heading} variant="subtitle1">Job Title</Typography>
                        <Typography variant="h6">10 Years</Typography>
                        <Typography style={style.heading} variant="subtitle1">Experiance</Typography>
                    </Grid>
                    <Grid style={style.headingtop} item md={7} xs={7}>
                    <Typography variant="h6">Full Time</Typography>
                        <Typography style={style.heading} variant="subtitle1">Employement Type</Typography>
                        <Typography variant="h6">Illustario</Typography>
                        <Typography style={style.heading} variant="subtitle1">Skill {'&'} Experiance</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={4} xs={12}>
                <Calendar
                 onChange={onChange}
                  value={value}
                 // showWeekNumbers={true}
                 // selectRange={true}
                 // showNavigation={true}
                  />
            </Grid>
        </Grid>
    </Container>
        
        
        
    )
}
export default Leave;
