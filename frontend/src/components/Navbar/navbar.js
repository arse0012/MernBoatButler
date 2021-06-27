import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div>
                <div className="nav navbar-dark navbar-expand-lg">
                    <li className="nav-item"> <Link to="/" className="nav-link">Company Login</Link></li>
                </div>

            </div>
        );
    }
}

export default Navbar;