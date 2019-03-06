import React from 'react';
import PhotoIndexItem from '../photo/photo_index_item';
import NavbarContainer from '../nav/nav_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserPhotos(this.props.match.params.id);
  }

  render() {
    let name;
    if (this.props.userPhotos.length !== 0) {
      name = this.props.userPhotos[0].username;
    } else {
      name = null;
    }

    let photosIndexItemArray = this.props.userPhotos.map( (photo) => {
      return(
          <div>
            <PhotoIndexItem
              photo={photo}
              key={photo.id}
            />
          </div>
      )
    });

    return(
      <div>
        <NavbarContainer />
        <div className="user-name-cover-page">
          {name !== null ? <div className="user-name">{`${name}'s photos`}</div> : <div></div>}
        </div>
        <div className="photo-index">
            {photosIndexItemArray}
        </div>
      </div>

    )
  }
}

export default UserShow;
