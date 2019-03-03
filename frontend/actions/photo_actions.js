import * as PhotoApiUtil from '../util/photos_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const CLEAR_PHOTO_ERRORS = "CLEAR_PHOTO_ERRORS";

const receiveAllPhotos = (photos) => {
  return({
    type: RECEIVE_ALL_PHOTOS,
    photos: photos
  })
}

const receivePhoto = (photo) => {
  return({
    type: RECEIVE_PHOTO,
    photo: photo
  })
}

const removePhoto = (photo) => {
  return({
    type: REMOVE_PHOTO,
    photoId: photo.id
  })
}

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_PHOTO_ERRORS,
    errors: errors
  })
}

export const clearErrors = () => {
  return ({
    type: CLEAR_PHOTO_ERRORS,
  })
}

export const getPhotos = () => dispatch => (
  PhotoApiUtil.getPhotos().then(photos => (
    dispatch(receiveAllPhotos(photos))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getUserPhotos = (userId) => dispatch => (
  PhotoApiUtil.getUserPhotos(userId).then(photos => (
    dispatch(receiveAllPhotos(photos))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getPhoto = (id) => dispatch => (
  PhotoApiUtil.getPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPhoto = (photo) => dispatch => (
  PhotoApiUtil.createPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const editPhoto = (photo) => dispatch => (
  PhotoApiUtil.editPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deletePhoto = (id) => dispatch => (
  PhotoApiUtil.deletePhoto(id).then(photo => (
    dispatch(removePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
