import React from 'react';
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import '../styles/Footer.css';

function Footer(){
    return (
        <div className='footer'>
            <div className='socialMedia'>
            <a href="https://github.com/elliehess" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ellie-hess-56527061/" target="_blank"><FaLinkedin /></a>
                <FaTwitter />
                {/* i do not have a twitter or stacked overflow profile */}
            </div>
            <p> &copy; 2023 github.com/LondaNH/Iheartmusic</p>
        </div>
    );
}

export default Footer;