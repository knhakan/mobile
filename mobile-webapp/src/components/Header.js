import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='navbar'>
            <Link to='/' className='link'>
                Home
            </Link>
            <Link to='/createlisting' className='link'>
                Create a Car Listing
            </Link>
            <Link to='/overview' className='link'>
                Vehicles
            </Link>
        </div>
    )
}

export default Header
