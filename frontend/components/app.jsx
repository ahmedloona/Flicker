import React from 'react';
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';

const App = () => (

  <div>
    <Route exact path="/" component={Splash} />
    <Route exact path="/signup" component={SignUpFormContainer} />
    <Route exact path="/signin" component={SignInFormContainer} />
  </div>
);

export default App;
