import { connect } from 'react-redux';
import React from 'react';
import { signin, clearErrors } from '../../actions/session_actions';
import SignInForm from './signin_form';
// import {receiveErrors} from '../../actions/session_actions';

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
    clearErrors: () => dispatch(clearErrors()),
  })
}

export default connect(mSP, mDP)(SignInForm);
