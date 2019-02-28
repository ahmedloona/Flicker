import { connect } from 'react-redux';
import React from 'react';
import { signin } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mSP = (state) => {
  return ({
    formType: 'signin',
  })
}

const mDP = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signin(user)),
  })
}

export default connect(mSP, mDP)(SignInForm);
