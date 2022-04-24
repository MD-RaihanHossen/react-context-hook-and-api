import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='text-white font-bold bg-black p-3 text-6xl'>Welocme to ShoppingMOl</h1>
            <nav className='nav-area font-bold'>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order</Link>
                <Link to="/grandpa">Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;