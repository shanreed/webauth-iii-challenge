import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
  state = {
    username: 'Keith',
    password: 'keithpassword'
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post('/auth/signin', this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h1>SIGN IN</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              id="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit">SIGN IN</button>
          </div>
        </form>
      </>
    );
  }
}

export default Signin;