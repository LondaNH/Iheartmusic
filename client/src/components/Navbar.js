import React from 'react';
import { Link } from 'react-router-dom';
import { FaUmbrellaBeach } from 'react-icons/fa'
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

import Auth from '../utils/auth';
import '../styles/Navbar.css'

const AppNavbar = () => {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
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
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="Umbrella">< FaUmbrellaBeach style={{ color: 'white', fontSize: '39px' }} /></span> GetAwayWithBae
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default AppNavbar;