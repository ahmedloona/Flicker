import React from 'react';

const PhotoIndexItem = (props) => {
  return(
    <div className="photo-item-container">
      <div className="photo-card">
        <img
          src={`${props.photo.imageUrl}`}
        />
      </div>
    </div>
  )
}

export default PhotoIndexItem;
