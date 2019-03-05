import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    // debugger;
    let photosIndexItemArray = this.props.photos.map( (photo) => {
      return(
        <PhotoIndexItem
          photo={photo}
          key={photo.id}
        />
      )
    });
    return (
      <div className="PhotoIndexItemContainer">
        <ul>
          {photosIndexItemArray}
        </ul>
      </div>
    )

  }
}

export default PhotoIndex;
