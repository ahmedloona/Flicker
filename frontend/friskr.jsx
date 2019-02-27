import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';
import configureStore from './store/store';
import {signup, signin, signout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  // window.signup = SessionUtil.signup;
  // window.signin = SessionUtil.signin;
  // window.signout = SessionUtil.signout;

  window.signup = signup;
  window.signin = signin;
  window.signout = signout;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Friskr</h1>, root);
});
