import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
import PhotoShowContainer from './photo/photo_show_container'

const App = () => (

  <div>
    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/signin" component={SignInFormContainer} />
    <ProtectedRoute exact path="/photos/:id" component={PhotoShowContainer} />
  </div>
);

export default App;
