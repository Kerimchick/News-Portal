import React from 'react';
import "./style.css"
import image from "../image/ria.png"
import {Link} from "react-router-dom";

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
                        <Link to="/" className="link">Main</Link>
                        <Link to="/news" className="link">News</Link>
                        <Link to="/signin" className="link">Sign In</Link>
                        <Link to="/registration">Registration</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;