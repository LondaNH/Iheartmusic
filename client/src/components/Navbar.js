import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

import Auth from '../utils/auth';
import '../styles/Navbar.css'

const AppNavbar = () => {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className='navbar'>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Profile
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </div>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Sign up! 
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row-px-5">

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default AppNavbar;