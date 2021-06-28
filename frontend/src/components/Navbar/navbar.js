import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from "@material-ui/core";

import useStyles from "./styles";


const Navbar = () => {
    const classes = useStyles();


    return (
        <AppBar className={classes.appBar} color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h4" align="center">NJORD</Typography>
                
            </div>
        </AppBar>
    );
}

export default Navbar;