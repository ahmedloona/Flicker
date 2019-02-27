import {
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
} from '..actions/session_actions';
import merge from 'lodash/merge';

const initial_state = { id: null };

const sessionReducer = (oldState = initial_state, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[id] = action.user.id;
      return newState;
    case REMOVE_CURRENT_USER:
      newState[id] = null;
      return newState;
    default:
      return oldState;
  }
}
