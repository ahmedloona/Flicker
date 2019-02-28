import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mSP = (state) => {
  return ({
    formType: 'signup',
  })
}

const mDP = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
  })
}

export default connect(mSP, mDP)(SignUpForm);
