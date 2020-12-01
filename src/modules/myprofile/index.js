import React from 'react';
import { style } from './style.js';
import Rating from '@material-ui/lab/Rating';
import { Container, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import img from '../../assets/img.jpg'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Myprofile() {
    const [value, onChange] = useState(new Date());
    return (
        <Container style={style.main}>
            <Grid container>
                <Grid item md={2}>
                    <img style={style.img} src={img} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography style={style.heading1} variant="h4">
                        Muhammad Adnan  <Rating name="read-only" value={4} readOnly />
                    </Typography>
                    <Grid container>
                        <Grid style={style.headingtop} item md={5} xs={5}>
                            <Typography style={style.heading} variant="subtitle1">Job Title</Typography>
                            <Typography variant="h6">Art Director</Typography>
                            <Typography style={style.heading} variant="subtitle1">Experiance</Typography>
                            <Typography variant="h6">10 Years</Typography>
                            <Typography style={style.heading} variant="subtitle1">Function</Typography>
                            <Typography variant="h6">Art {'&'} Multimedia</Typography>

                        </Grid>
                        <Grid style={style.headingtop} item md={7} xs={7}>
                            <Typography style={style.heading} variant="subtitle1">Employement Type</Typography>
                            <Typography variant="h6">Full Time</Typography>
                            <Typography style={style.heading} variant="subtitle1">Skill {'&'} Experiance</Typography>
                            <Typography variant="h6">Illustarion {'&'} UI/UX Writeframe</Typography>
                            <Typography style={style.heading} variant="subtitle1">Minashah</Typography>
                            <Typography variant="h6">Minashah Al Jassad, Albasar</Typography>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}