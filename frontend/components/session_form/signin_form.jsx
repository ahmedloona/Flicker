import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  render() {
    return (
      <div className="signin-form-container">
          <form onSubmit={this.handleSubmit} className="signin-form">
            <div className="form-title">Log in to Friskr</div>
              <div className="input-container">
                <div>username</div>
                <input
                  type='text'
                  onChange={this.update('username')}
                />
              </div>
              <div className="input-container">
                <div>password</div>
                <input
                  type='text'
                  onChange={this.update('password')}
                />
              </div>
            <button type="submit" id="signin-button">Next</button>
          </form>
      </div>
    )
  }
}

export default SignInForm;
