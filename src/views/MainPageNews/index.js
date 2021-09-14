import React from 'react';
import Layout from "../../components/Layout";
import Image from "../images/5-best-websites-for-watching-news-1.png"

const MainPageNews = () => {
    return (
        <Layout>
            <div>
                <img src={Image} alt="#" className="main-img"/>
            </div>
        </Layout>
    );
};

export default MainPageNews;