import React from 'react';
import NavbarContainer from '../nav/nav_container';
import { Link } from 'react-router-dom';


const Splash = () => {
  return (
    <div>
      <NavbarContainer />
      <div id="splash-photo">
        <div id="splash-text-container">
          <div id="splash-text">Find your inspiration.</div>
          <Link to="/signup" id="signup-button-splash">Sign Up</Link>
        </div>
      </div>
      <footer id="splash-footer">
        <div>Developers</div>
        <div>Guidelines</div>
        <div>Privacy</div>
        <div>Terms</div>
        <div>Help forum</div>
        <div>English</div>
      </footer>
    </div>
  )
}

export default Splash;
