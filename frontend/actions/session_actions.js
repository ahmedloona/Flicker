import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  })
}

const removeCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
  })
}

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors: errors
  })
}

export const signin = (user) => dispatch => {
  return(
    SessionApiUtil.signin(user).then( user => dispatch(receiveCurrentUser(user)))
  )
}

export const signout = () => dispatch => {
  return(
    SessionApiUtil.signout().then( () => dispatch(removeCurrentUser()))
  )
}

export const signup = (user) => dispatch => {
  return(
    SessionApiUtil.signup(user).then( user => dispatch(receiveCurrentUser(user)))
  )
}
