import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUploadForm from './photo_upload_form';

const mSP = (state) => {
  return ({
  })
}

const mDP = (dispatch) => {
  return ({
    createPhoto: (photo) => dispatch(createPhoto(photo)),
  })
}

export default connect(mSP, mDP)(PhotoUploadForm);
