import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserLoginContext } from '../ContextAPI/UserLoginContext';
import './Header.css'

const Header = () => {
    const { loginUser } = useContext(UserLoginContext);

    return (
        <header>
            <h1>Local Riders</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/destination/1'}>Destination</Link>
                    </li>
                    <li>
                        <Link to={'/goto/'}>GoTo</Link>
                    </li>
                    <li>
                        <Link to={'/loginAccount'}>
                            {loginUser ? loginUser.email || loginUser.displayName || 'User' : 'Login'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;