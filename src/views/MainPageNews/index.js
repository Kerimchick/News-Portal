import React from 'react';
import Layout from "../../components/Layout";
import Image from "../images/5-best-websites-for-watching-news-1.png"
import {Link} from "react-router-dom";

const MainPageNews = () => {
    return (
        <Layout>
            <div className="main-img">
                <Link to="/news">
                    <img src={Image} alt="#"/>
                </Link>
            </div>
        </Layout>
    );
};

export default MainPageNews;