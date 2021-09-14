import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Link} from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios("https://611675aa1c592d0017bb7f09.mockapi.io/News")
            .then(({data}) => setNews(data))
    }, [])
    return (
                <div className="row">
                        {
                            news.map(el =>
                                <div key={el.id} className="col-3 down">
                                    <Link to={`/details/${el.id}`}>
                                        <img src={el.image} alt={el.title} className="img"/>
                                        <h4 className="color">{el.title}</h4>
                                    </Link>
                                </div>
                            )
                        }
                </div>
    );
};

export default News;