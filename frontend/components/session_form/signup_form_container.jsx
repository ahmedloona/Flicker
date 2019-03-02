import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mSP = (state) => {
  let errors = state.errors.session;
  return ({
    formType: 'signup',
    signupErrors: errors,
  })
}

const mDP = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  })
}

export default connect(mSP, mDP)(SignUpForm);
