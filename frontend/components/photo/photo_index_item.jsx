import React from 'react';

const PhotoIndexItem = (props) => {
  // debugger;
  return(
    <div>
      <h3>I am a photo index item</h3>
      <img src={`${props.photo.imageUrl}`}>
      </img>
    </div>
  )
}

export default PhotoIndexItem;
