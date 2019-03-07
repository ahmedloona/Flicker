import React from 'react';

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
    this.props.createPhoto(formData);
  }

  render() {
    console.log(this.state);
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="photo-body">Body of Post</label>
        <input type="text"
          id="photo-body"
          value={this.state.caption}
          onChange={this.handleInput.bind(this)}/>
        <input type="file"
          onChange={this.handleFile.bind(this)}/>
        <h3>Image preview </h3>
        {preview}
        <button>Upload new Photo!</button>
      </form>
    );
  }
}

export default PhotoUploadForm;
