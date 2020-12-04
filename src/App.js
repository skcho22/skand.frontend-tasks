import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Edit from "./components/edit";
import Userindex from "./components/userindex";
import Userdetails from "./components/userdetails";
import Delete from "./components/delete";



function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Skand Frontend Tasks!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>User Creation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/edit"}>Edit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/delete"}>Delete</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/userindex"}>User Index</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/userdetails"}>User Details</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path='/userdetails' component={Userdetails} />
            <Route path="/userindex" component={Userindex} />
            <Route path="/delete" component={Delete} />
            <Route path="/edit" component={Edit} />


          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
