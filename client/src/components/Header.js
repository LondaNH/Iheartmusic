import React from 'react';
import { Link } from 'react-router-dom';
import { FaUmbrellaBeach } from 'react-icons/fa'
import '../styles/Header.css'

function Header(){
    return (
        <header className='header'>
            <></>
            <Link to="/">
            <div className='headertitle'>GetAwayWithBae<span><FaUmbrellaBeach style={{ color: 'white', fontSize: '48px' }} /></span></div>      
            </Link>
            
        </header>
    )
}

export default Header;