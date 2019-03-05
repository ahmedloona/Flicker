import { connect } from 'react-redux';
import { getPhotos, getUserPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mSP = (state) => {
  //debugger
  let photos = state.entities.photos;
  let photosArray = Object.values(photos);
  let currentUserId = state.session.id
  return ({
    photos: photosArray,
    currentUserId: currentUserId,
  })
}

const mDP = (dispatch) => {
  return ({
    getPhotos: () => dispatch(getPhotos()),
    getUserPhotos: (currentUserId) => dispatch(getUserPhotos(currentUserId)),
  })
}

export default connect(mSP, mDP)(PhotoIndex);
