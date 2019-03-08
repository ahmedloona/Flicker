import { connect } from 'react-redux';
import { createPhoto, clearErrors } from '../../actions/photo_actions';
import PhotoUploadForm from './photo_upload_form';

const mSP = ({ errors, session, entities: { users } }) => {
  // debugger
  let photoUploadErrors = errors.photos;
  return ({
    currentUser: users[session.id],
    photoUploadErrors: photoUploadErrors,
  })
}

const mDP = (dispatch) => {
  return ({
    clearPhotoUploadErrors: () => dispatch(clearErrors()),
    createPhoto: (photo) => dispatch(createPhoto(photo)),
  })
}

export default connect(mSP, mDP)(PhotoUploadForm);
