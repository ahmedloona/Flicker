import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Greeting from './greeting';

const mSP = ({ session, entities: { users } }) => {
  // const currentUserId = state.session.id;
  // const currentUser = state.entities.users[currentUser];
  return ({
    currentUser: users[session.id]
  })
}

const mDP = (dispatch) => {
  return ({
    signout: () => dispatch(signout()),
  })
}

export default connect(mSP, mDP)(Greeting);
