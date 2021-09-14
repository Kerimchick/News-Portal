import React from 'react';
import "./style.css"
import image from "../image/ria.png"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="header-flex">
                    <div className="logo">
                        <Link to="/">
                            <img src={image} alt="#" className="header-footer-logo"/>
                        </Link>
                    </div>
                    <div>
                        <p>&copy; 2021 ria.ru</p>
                    </div>
                    <div>
                        <p>РИА САЙТ НОВОСТЕЙ</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;