import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { style } from './style.js';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import img from '../../assets/img.jpg';

const useStyles = makeStyles({
    list: {
        width: 200,
        height: 600,
        backgroundColor: 'rgb(63 81 181)',
        padding: '20px',
        opacity:'0.9',   
    },
});

const type = 'top' | 'left' | 'bottom' | 'right';

export default function Drawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (
        event
    ) => {

        setState({ ...state, left: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={"img"}>
                <img style={style.img} src={img} alt="profile image" />
                </ListItem>
                <ListItem button key={"text"}>
                <Typography  style={style.icon2}  variant="subtitle1">
                 Muhammad
               </Typography>
                </ListItem>
                <ListItem button key={"searchicon"}>
                < SearchIcon style={style.icon2} />
                </ListItem>
                <ListItem button key={"languageicon"}>
                <LanguageIcon  style={style.icon2} />
                </ListItem>
            </List>
            <Divider />
        </div>
    );
    return (
        <div>
            <ReorderSharpIcon style={style.icon} onClick={toggleDrawer("left", true)} />
            <React.Fragment key={"left"}>
                <SwipeableDrawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    {list("left")}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}