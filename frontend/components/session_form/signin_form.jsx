import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav/nav_container';

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
    // this.props.processForm(user);
    this.setState({username: '', password: ''});
    this.props.processForm(user).then( () => this.props.history.push("/"));
  }

  populateDemoFields(e) {
    e.preventDefault();
    // debugger
    this.setState({username: "Ahmed", password: "123456"}, () => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then( () => this.props.history.push("/"));
      // setTimeout( () => this.setState({username: '', password: ''}) ,1000);
    });
  }

  render() {
    return (
      <div>
        <div className="navbar-login-form">
          <div id="flutter-logo-container"><Link to="/" id="flutter-logo">flutter</Link></div>
        </div>
        <div className="form-container" id="signin">
            <form onSubmit={this.handleSubmit} className="form">
            <div className="circles"></div>
                <div className="form-title">Log in to Flutter</div>
                <div className="errors">{this.props.signinErrors}</div>
                <div className="input-container">
                  <div>username <span>*</span></div>
                  <input
                    type='text'
                    onChange={this.update('username')}
                    value={this.state.username}
                    autofocus="autofocus"
                  />
                </div>
                <div className="input-container">
                  <div>password <span>*</span></div>
                  <input
                    id="password"
                    type='text'
                    onChange={this.update('password')}
                    value={this.state.password}
                  />
                </div>
              <div id="required">* required</div>
              <button type="submit" id="submit-button">Next</button>
              <button id="demo-button" onClick={this.populateDemoFields}>Demo</button>
              <div id="no-account-yet">Not a Flickr member? <Link to="/signup">Sign up here</Link></div>
            </form>
        </div>
      </div>
    )
  }
}

export default SignInForm;
