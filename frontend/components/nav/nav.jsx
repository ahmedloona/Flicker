import React from 'react';
import { Link } from 'react-router-dom';
// import PhotoUploadFormContainer from '../photo/photo_upload_form_';

const Nav = (props) => {
  if (props.currentUser === undefined) {
    return(
      <div className="navbar-signedout">
        <div id="flutter-logo-container"><Link to="/" id="flutter-logo">flutter</Link></div>
        <div id="signin-link-container"><Link to="/signin" id="signin-link">Log In</Link></div>
        <Link to="/signup" id="signup-button">Sign Up</Link>
      </div>
    )
  } else {
      return(
        <div className="navbar-signedin">
          <div id="flutter-logo-container"><Link to="/" id="flutter-logo">flutter</Link></div>
          <Link to={`/users/${props.currentUser.id}`}><div>You</div></Link>
          <div><input id="search-bar-signedin" placeholder="Photos, people, or groups"></input></div>
          <Link to="/photos/upload"><div>Upload</div></Link>
          <div>{`Welcome ${props.currentUser.username}`}</div>
          <div><button id="signout-button" onClick={props.signout}>SignOut</button></div>
        </div>
      )
  }
};

export default Nav;
