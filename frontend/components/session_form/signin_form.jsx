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
      <form onSubmit={this.handleSubmit}>
        <label> Username
          <input
            type='text'
            onChange={this.update('username')}
          />
        </label>
        <label> Password
          <input
            type='text'
            onChange={this.update('password')}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    )
  }
}

export default SignInForm;
