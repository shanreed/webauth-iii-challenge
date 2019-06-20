import React from 'react';
import './App.css';

import { NavLink, Route, withRouter } from 'react-router-dom';
import Login from './components/auth/Login';


function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
        
        </nav>
      </header>
      <main>
        <Route path="/login" component={Login} />
      </main>
    </div>
  );
}

export default withRouter(App);