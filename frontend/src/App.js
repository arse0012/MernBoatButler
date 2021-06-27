import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "@material-ui/core"

import Navbar from "./components/Navbar/navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import companyLogin from './components/Login/companyLogin';


const App =() => {
    return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Route path="/companyLogin" exact component={companyLogin} />
          
        </Container>
      </BrowserRouter>
    );
  }
  
  export default App;