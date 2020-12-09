
import React from 'react';
import { style } from './style.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles,createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    hover: {
      boxShadow: '5px 10px 18px  #888888',
     '&:hover': {
         background: "#3f51b5",
         color:'#fff',
         transform: 'scale(1.1)',
         transition: theme.transitions.create("all", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.standard, 
   })
    },
  }
  
  }),
);

export default function Document() {
  const classes = useStyles();
  return (
    <Container style={style.main}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}  >
          <Paper className={classes.hover}>
            <Typography variant="subtitle1" style={style.heading}>
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        <Paper className={classes.hover}>
            <Typography variant="subtitle1" style={style.heading}>
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        <Paper className={classes.hover}>
            <Typography variant="subtitle1" style={style.heading}>
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        <Paper className={classes.hover}>
            <Typography variant="subtitle1" style={style.heading}>
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        <Paper className={classes.hover}>
            <Typography variant="subtitle1" style={style.heading}>
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        <Paper className={classes.hover}>
            <Typography variant="subtitle1" style={style.heading}>
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
