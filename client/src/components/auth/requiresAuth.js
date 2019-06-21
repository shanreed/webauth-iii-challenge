import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(
  options => {
    options.headers.authorization = localStorage.token;
    return options;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.token;
      const logMessage = <h2>Please login to see the users</h2>;
      
      return <>{token ? <Component {...this.props} /> : logMessage}</>;
    }
  };
}