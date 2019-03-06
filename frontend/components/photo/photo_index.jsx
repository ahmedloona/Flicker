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

    // function shuffle(a) {
    //   for (let i = a.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       [a[i], a[j]] = [a[j], a[i]];
    //   }
    //   return a;
    // }

    let photosIndexItemArray = this.props.photos.map( (photo) => {
      return(
          <PhotoIndexItem
            photo={photo}
            key={photo.id}
          />
      )
    });

    // photosIndexItemArray = shuffle(photosIndexItemArray);

    return (
      <div className="photo-index">
          {photosIndexItemArray}
      </div>
    )

  }
}

export default PhotoIndex;
