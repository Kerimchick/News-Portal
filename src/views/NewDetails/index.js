import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";

const NewDetails = () => {
    const [newDetails, setNewDetails] = useState({})
    let {id} = useParams()
    useEffect(() => {
        axios(`https://611675aa1c592d0017bb7f09.mockapi.io/News/${id}`)
            .then(({data}) => setNewDetails(data))
    }, [id])
    return (
        <Layout>
            <div className="row">
                <h2>Detailed information</h2>
                <div className="row">
                    <div className="col-6">
                        <img className="img details-img" src={newDetails.image} alt=""/>
                    </div>
                    <div className="col-6">
                        <h3 className="title"> {newDetails.title}</h3>
                        <p className="film_details_description"> {newDetails.description}</p>
                        <h5 className="title"> Date: {newDetails.Date}</h5>
                        <h5 className="title"> Author: {newDetails.author}</h5>
                    </div>
                    <div>
                        <p>Commentaries</p>
                        <div className="comment">
                            <p><textarea rows="10" cols="45" name="text" placeholder="Commentaries"></textarea></p>
                            <button type="button" className="btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NewDetails;