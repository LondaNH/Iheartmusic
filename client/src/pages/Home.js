import React from "react";
import { Link } from 'react-router-dom';
import BgVideo from '../media/bgvideo.mp4'
// import VideoPlayer from '../media/VideoPlayer';
import '../styles/Home.css';

import Auth from '../utils/auth';

const Home = () => {
  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>

      <div className="home-text">
        <h1>GetAwayWithBae</h1>
        <p>Just started dating? Wanting to celebrate a 10-year anniversary?
          <br></br>Choose from a variety of vacation packages to get away with your loved one.
          <br></br>Click on the button below to start your journey!
        </p>
      </div>

      {!Auth.loggedIn() && (
        <div className="home-btn">
          <Link to='/login'>Explore</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
