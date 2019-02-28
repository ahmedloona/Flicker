import { connect } from 'react-redux';
import React from 'react';
import { signin } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mSP = (state) => {
  let errors = state.errors.session;
  return ({
    formType: 'signin',
    signinErrors: errors,
  })
}

const mDP = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signin(user)),
  })
}

export default connect(mSP, mDP)(SignInForm);
