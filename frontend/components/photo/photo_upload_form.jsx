import React from 'react';
import { Link } from 'react-router-dom';


class PhotoUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      photoFile: null,
      photoUrl: null
    };
  }

  handleInput(e) {
    this.setState({caption: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
      this.props.clearPhotoUploadErrors();
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[caption]', this.state.caption);
    if (this.state.photoFile) {

      formData.append('photo[image]', this.state.photoFile);
    }
    this.props.createPhoto(formData).then( () => this.props.history.push(`/users/${this.props.currentUser.id}`));;
  }

  render() {
    // console.log(this.state);
    const preview = this.state.photoUrl ? <img id="image-preview" src={this.state.photoUrl}/> : null;
    return (
      <div>
        <div className="navbar-upload-form">
          <div id="flutter-logo-container"><Link to="/" id="flutter-logo">flutter</Link></div>
        </div>
        <div id="photo-upload-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} className="upload-form">
            <div>
              <label className="custom-file-upload">
                <input type="file"
                onChange={this.handleFile.bind(this)}/>
                Select Photo
              </label>
            </div>
            <div id="photo-upload-error">
              {this.props.photoUploadErrors}
            </div>
            <div id="preview">
              {preview}
            </div>
            <div>
              <label id="caption" htmlFor="photo-caption">caption your photo</label>
            </div>
            <div>
              <input type="textarea" wrap="soft"
              id="photo-caption"
              value={this.state.caption}
              onChange={this.handleInput.bind(this)}/>
            </div>
            <button id="upload-button">Upload Photo</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PhotoUploadForm;
