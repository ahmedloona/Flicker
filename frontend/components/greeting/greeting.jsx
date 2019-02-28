import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  if (props.currentUser === undefined) {
    return(
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    )
  } else {
      return(
        <div>
          <h1>{`Welcome ${props.currentUser.username}`}</h1>
          <button onClick={props.signout}>SignOut</button>
        </div>
      )
  }
};

export default Greeting;
