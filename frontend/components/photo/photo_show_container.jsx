import { connect } from 'react-redux';
import { getPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';


const mSP = (state, ownProps) => {
  let photoId = ownProps.match.params.id;
  let photo = state.entities.photos[photoId];
  let imageUrl;
  if (photo) {
    imageUrl = photo.imageUrl;
  } else {
    imageUrl = null;
  }

  return ({
    photoId: photoId,
    imageUrl: imageUrl,
  })
}

const mDP = (dispatch) => {
  return ({
    getPhoto: (photoId) => dispatch(getPhotos(photoId)),
  })
}

export default connect(mSP, mDP)(PhotoShow);
