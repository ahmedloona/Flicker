import { connect } from 'react-redux';
import { getUserPhotos } from '../../actions/photo_actions';
import UserShow from './user_show';

const mSP = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  let userPhotos = Object.values(state.entities.photos);

  return ({
    userId: userId,
    state: state,
    userPhotos: userPhotos
  })
}

const mDP = (dispatch) => {
  return ({
    getUserPhotos: (userId) => dispatch(getUserPhotos(userId)),
  })
}

export default connect(mSP, mDP)(UserShow);
