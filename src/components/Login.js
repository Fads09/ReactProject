import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import User from "./User";

// The Roster component matches one of two different routes
// depending on the full pathname
const Login = () => (
  
  <Switch>
    <Route exact path="/Login" component={LoginForm} />
    <Route path="/Login/:number" component={User} />
  </Switch>
  
);

export default Login;
