import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1>Local Riders</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to="#">Destination</Link>
                    </li>
                    <li>
                        <Link to="#">Blog</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                    <li>
                        <Link to="">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;