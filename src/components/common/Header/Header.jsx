import React from "react";
import './Header.css'
import Banco from './banco.png'
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <nav>
                <div className="container-logo">
                    <ul id="logo">
                        <li><Link to={"/home"}><img src={Banco} alt=""/></Link></li>
                    </ul>
                </div>
                <div className="container">
                    <ul>
                        <Link to={"/login"} className="log"><li>Login</li></Link>
                        <Link to={"/register"} className="log"><li>Register</li></Link>
                        <li>Profile</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;