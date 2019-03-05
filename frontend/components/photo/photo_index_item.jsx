import React from 'react';

const PhotoIndexItem = (props) => {
  // debugger;
  return(
    <div className="photo-item-container">
      <div className="photo-card">
        <h3>I am a photo index item</h3>
        <img
          src={`${props.photo.imageUrl}`}
        />
      </div>
    </div>
  )
}

export default PhotoIndexItem;
