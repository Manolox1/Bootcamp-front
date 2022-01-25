import React from "react";
import './Header.css'
import Banco from './banco.png'

const Header = () => {
    return(
        <div className="header">
            <nav className="nav-bar">
                <div className="container-logo">
                    <ul id="logo">
                        <li><a href="#"><img src={Banco} width={150} height={60}/></a></li>
                    </ul>
                </div>
                <div className="container">
                    <ul>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;