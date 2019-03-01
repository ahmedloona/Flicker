import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  if (props.currentUser === undefined) {
    return(
      <div className="navbar-signedout">
        <div><Link to="/signin" id="signin-link">Log In</Link></div>
        <button id="signup-button"><Link to="/signup">Sign Up</Link></button>
      </div>
    )
  } else {
      return(
        <div className="navbar-signein">
          <h1>{`Welcome ${props.currentUser.username}`}</h1>
          <button onClick={props.signout}>SignOut</button>
        </div>
      )
  }
};

export default Nav;
