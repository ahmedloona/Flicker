import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  })
}

const removeCurrentUser = () => {
  return ({
    type: REMOVE_CURRENT_USER,
  })
}

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors: errors
  })
}

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
  })
}

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signin = user => dispatch => (
  SessionApiUtil.signin(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signout = () => dispatch => (
  SessionApiUtil.signout().then(user => (
    dispatch(removeCurrentUser())
  ))
);
