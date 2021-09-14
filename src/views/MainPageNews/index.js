import React from 'react';
import Image from "../images/5-best-websites-for-watching-news-1.png"
import {Link} from "react-router-dom";

const MainPageNews = () => {
    return (
            <div className="main-img">
                <Link to="/news">
                    <img src={Image} alt="#"/>
                </Link>
            </div>
    );
};

export default MainPageNews;