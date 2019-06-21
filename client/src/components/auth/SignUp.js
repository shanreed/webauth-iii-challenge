import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/auth/register", this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            id="username"
            type="text"
            placeholder= "Enter Username"
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
            placeholder= "Create a password"
          />
        </div>
        <div>
          <label htmlFor="department">Department</label>
          <input
            onChange={this.handleChange}
            value={this.state.department}
            name="department"
            id="department"
            type="text"
            placeholder= "Enter your department"
          />
        </div>
        <div>
          <button type="submit">SIGN UP</button>
        </div>
      </form>
    );
  }
}

export default SignUp;