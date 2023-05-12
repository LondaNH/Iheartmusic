import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaAlignJustify, FaUmbrellaBeach } from 'react-icons/fa';

import Auth from '../utils/auth';

const AppNavbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  // whenever the location changes, set the expandNavbar to false so it collapses and you can see the new rendered page
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/orderHistory">Order History</Link>
          <Link to="/products">Packages</Link>
          <button onClick={Auth.logout}>Logout</button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup">Sign up!</Link>
          <Link to="/login">Login</Link>
        </>
      );
    }
  }

  return (
    <div className='navbar' id={expandNavbar ? 'open': 'close'}>
      <div className='toggleButton'>
        <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
          <FaAlignJustify />
        </button>
      </div>
      {/* links to each navbar item to render the appropriate page */}
      <div className='links'>
        <Link to="/">
          <FaUmbrellaBeach style={{ color: 'white', fontSize: '48px' }} />
          GetAwayWithBae
          <span></span>
        </Link>
        {showNavigation()}
      </div>
    </div>
  );
}

export default AppNavbar;


  //   if (Auth.loggedIn()) {
  //     return (
  //       <div className="navbar">
  //       <div className="menu">
  //           <div> 
  //             <Link to="/orderHistory">
  //             Profile
  //           </Link>
  //           </div>
  //           <div>
  //           <Link to="/products">
  //             Packages
  //           </Link>
  //           </div>
  //           <div>
  //           <a href="/" onClick={() => Auth.logout()}>
  //             Logout
  //           </a>
  //           </div>
  //       </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="navbar">
  //       <div className="menu">
  //           <div>  <Link to="/signup">
  //             Sign up! 
  //           </Link>
  //           </div>
  //           <div>

  //           </div>
  //           <div></div>
  //       </div>
  //       </div>
  //     );
  // }


