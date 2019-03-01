import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
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
    // debugger
    return (
      <div className="form-container" id="signup">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="circles"></div>
          <div className="form-title">Sign Up</div>
          <div className="errors">
            <ul>
              {this.props.signupErrors[0]}
            </ul>
          </div>
          <div className="input-container">
          <div>username <span>*</span></div>
            <input
              type='text'
              onChange={this.update('username')}
            />
          </div>
          <div className="input-container">
            <div>password <span>*</span></div>
            <input
              id="password"
              type='text'
              onChange={this.update('password')}
            />
          </div>
          <div className="input-container">
            <div>email <span>*</span></div>
            <input
              type='text'
              onChange={this.update('email')}
            />
          </div>
          <div id="required">* required</div>
          <br />
          <button type="submit" id="submit-button">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
