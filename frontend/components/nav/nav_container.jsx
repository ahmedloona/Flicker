import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Nav from './nav';

const mSP = ({ session, entities: { users } }) => {
  return ({
    currentUser: users[session.id]
  })
}

const mDP = (dispatch) => {
  return ({
    signout: () => dispatch(signout()),
  })
}

export default connect(mSP, mDP)(Nav);
