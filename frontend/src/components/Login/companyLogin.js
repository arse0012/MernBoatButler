import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Button, Paper, Container, Typography, Grid } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import useStyles from "./styles";
import Input from "./Input";

const CompanyLogin = () => {
    const classes = useStyles();


    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (
        <Container component="main" maxWidth="xs" elevation={5}>
            <div className={classes.brandContainer} variant="h6" align="center">NJORD
                    
                    </div>
            <Paper className={classes.paper}>
                <Typography variant="h5">Comapany Login</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Input name="name" label="Username" handleChange={handleChange} type="autoFocus" />
                        <Input name="confirmPassword" label="Password" handleChange={handleChange} type="password" />
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign In</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default CompanyLogin;