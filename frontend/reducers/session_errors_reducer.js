import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
} from '../actions/session_actions';


const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:   //new action for clearing errors
      return [];
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;
