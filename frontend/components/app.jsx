import React from 'react';
import { Route } from 'react-router-dom';
// import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';

const App = () => (
  <div>
    <h1>Welcome Friskr</h1>
    <Route path="/signin" component={SignInFormContainer} />
  </div>
);

export default App;
