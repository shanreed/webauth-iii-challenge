import React from 'react';
import './App.css';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Signin from './components/auth/Signin';
import Users from './components/users/Users';
import SignUp from './components/auth/SignUp'

function App(props) {
  const signOut = () => {
    localStorage.removeItem('token');
    props.history.push('/signin');
  };
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/signin">SIGN IN</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">USERS</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/signup">SIGN UP</NavLink>
          <div>
          <button onClick={signOut}>SIGN OUT</button>
          </div>
        </nav>
      </header>
      <main>
        <Route path="/signin" component={Signin} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={SignUp} />
      </main>
    </div>
  );
}

export default withRouter(App);