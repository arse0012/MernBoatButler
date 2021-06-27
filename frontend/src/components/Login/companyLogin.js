import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";


class companyLogin extends Component {

    render() {

        return (
            <Container maxwitdth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">NJORD</h1>
                            <p className="lead text-center">
                                Company Login
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Username'
                                        name='name'
                                        className='form-control'

                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Password'
                                        name='password'
                                        className='form-control'

                                        onChange={this.onChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                </AppBar>
            </Container>
        );
    }
}

export default companyLogin;