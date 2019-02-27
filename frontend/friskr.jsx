import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  window.signup = SessionUtil.signup;
  window.signin = SessionUtil.signin;
  window.logout = SessionUtil.logout;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Friskr</h1>, root);
});
