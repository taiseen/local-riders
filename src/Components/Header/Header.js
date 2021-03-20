import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);

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
                        <Link to={'/createAccount'}> New Account</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                        
                        {/* {loginUser ? loginUser?.displayName : <p>Login</p> } */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;