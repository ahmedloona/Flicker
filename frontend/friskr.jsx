import React from 'react';
import ReactDOM from 'react-dom';
// import * as SessionUtil from './util/session_api_util';
// import * as PhotoUtil from './util/photos_api_util';

import configureStore from './store/store';
// import {signup, signin, signout} from './actions/session_actions';
import {getPhotos, getUserPhotos, getPhoto, createPhoto, editPhoto, deletePhoto} from './actions/photo_actions';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  // test AJAX utils User/Session
  // window.signup = SessionUtil.signup;
  // window.signin = SessionUtil.signin;
  // window.signout = SessionUtil.signout;

  // test AJAX utils Photos
  // window.createPhoto = PhotoUtil.createPhoto;
  // window.getPhoto = PhotoUtil.getPhoto;
  // window.getPhotos = PhotoUtil.getPhotos;
  // window.editPhoto = PhotoUtil.editPhoto;
  // window.deletePhoto = PhotoUtil.deletePhoto;
  // window.getUserPhotos = PhotoUtil.getUserPhotos;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test THUNK action creators User/Session
  // window.signup = signup;
  // window.signin = signin;
  // window.signout = signout;
   // window.getState = store.getState;
   // window.dispatch = store.dispatch;


   // test THUNK action creators Photos
   window.getState = store.getState;
   window.dispatch = store.dispatch;
   window.getPhotos = getPhotos;
   window.getPhoto = getPhoto;
   window.getUserPhotos = getUserPhotos;
   window.createPhoto = createPhoto;
   window.editPhoto = editPhoto;
   window.deletePhoto = deletePhoto;



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
