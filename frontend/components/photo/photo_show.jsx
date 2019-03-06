import React from 'react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.closeShow = this.closeShow.bind(this);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.photoId);
  }

  closeShow(e) {
    e.preventDefault();
    this.props.history.push("/dashboard");
  }

  render() {
    if (!this.props.imageUrl) {
      return null;
    }

    return (
      <div className="photo-show-container">
        <button onClick={this.closeShow} className="x">X</button>
        <div className="photo-show-card">
          <img
            src={`${this.props.imageUrl}`}
          />
        </div>
      </div>
    )

  }
}

export default PhotoShow;
