import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ForgotPage from './pages/ForgotPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/renderer'

const Login = () => (
  <Switch>
    <Route path="/login" component={HomePage} />
    <Route path="/forgot" component={ForgotPage} />
   
  </Switch>
);

export default Login;
