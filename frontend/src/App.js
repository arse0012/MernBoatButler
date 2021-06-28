import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core"

import Navbar from "./components/Navbar/navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import companyLogin from './components/Login/companyLogin';
import Proposals from './components/Proposals/Proposals';


const App = () => {
  return (
    <BrowserRouter>

      <Container maxWidth="">
        <Route path="/" exact component={companyLogin} />
        <Navbar />
        <Switch />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/Proposals" exact component={Proposals} />

      </Container>
    </BrowserRouter>
  );
}

export default App;