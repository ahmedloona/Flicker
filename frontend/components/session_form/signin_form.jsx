import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.populateDemoFields = this.populateDemoFields.bind(this);

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
    this.setState({username: '', password: ''});
  }

  populateDemoFields(e) {
    e.preventDefault();
    // debugger
    this.setState({username: "Ahmed", password: "123456"}, () => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
      setTimeout( () => this.setState({username: '', password: ''}) ,1000);
    });
  }

  render() {
    return (
      <div className="signin-form-container">
          <form onSubmit={this.handleSubmit} className="signin-form">
          <div className="circles"></div>
            <div className="form-title">Log in to Friskr</div>
              <div className="errors">{this.props.signinErrors}</div>
              <div className="input-container">
                <div>username</div>
                <input
                  type='text'
                  onChange={this.update('username')}
                  value={this.state.username}
                />
              </div>
              <div className="input-container">
                <div>password</div>
                <input
                  id="password"
                  type='text'
                  onChange={this.update('password')}
                  value={this.state.password}
                />
              </div>
            <button type="submit" id="signin-button">Next</button>
            <button id="demo-signin-button" onClick={this.populateDemoFields}>Demo</button>
          </form>
      </div>
    )
  }
}

export default SignInForm;
