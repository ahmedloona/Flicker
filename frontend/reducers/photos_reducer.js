import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
} from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const photoId = action.photo.id;
      newState[photoId] = action.photo;
      return newState;
    case REMOVE_PHOTO:
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
}

export default photosReducer;
