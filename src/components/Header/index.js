import React from 'react';
import "./style.css"
import image from "../image/ria.png"
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-flex">
                    <div className="logo">
                        <Link to="/">
                            <img src={image} alt="#" className="header-footer-logo"/>
                        </Link>
                    </div>
                    <div>
                        <NavLink exact to="/" className="link">Main</NavLink>
                        <NavLink to="/news" className="link">News</NavLink>
                        <NavLink to="/signin" className="link">Sign In</NavLink>
                        <NavLink to="/registration"className="link">Registration</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;