import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = (props) => {
  // debugger
  return(
    <div className="photo-item-container">
      <div className="photo-card">
        <div><Link to={`/users/${props.photo.userId}`}>{props.photo.username}</Link></div>
        <Link to={`/photos/${props.photo.id}`}>
          <img
            src={`${props.photo.imageUrl}`}
          />
        </Link>
        <div id="caption-text">{`${props.photo.caption}`}</div>
      </div>
    </div>
  )
}

export default PhotoIndexItem;
