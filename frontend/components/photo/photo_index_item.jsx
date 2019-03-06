import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = (props) => {
  return(
    <div className="photo-item-container">
      <Link to={`/users/${props.photo.username}`}></Link>
      <div className="photo-card">
        <Link to={`/photos/${props.photo.id}`}>
          <img
            src={`${props.photo.imageUrl}`}
          />
        </Link>
      </div>
    </div>
  )
}

export default PhotoIndexItem;
