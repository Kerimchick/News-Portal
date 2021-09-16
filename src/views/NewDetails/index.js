import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import NotFound from "../NotFoundPage";

const NewDetails = () => {
    const [newDetails, setNewDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const [text, setText] = useState("")
    const [comments, setComments] = useState([])
    let {id} = useParams()
    useEffect(() => {
        axios(`https://611675aa1c592d0017bb7f09.mockapi.io/News/${id}`)
            .then(({data}) => {setNewDetails(data)})
            .catch(() => {setNotFound(true)})
            .finally(() => {setIsLoading(false)})
    }, [id])
    if(isLoading){
        return "Loading...."
    }
    if(notFound){
        return <NotFound />
    }
    return (
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

                        <div>
                            <p>
                                <textarea rows="5" cols="50" name="text" placeholder="Commentaries..." className="rounded">
                                </textarea>
                            </p>
                            <button type="button" className="btn up btn-info down">Send</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default NewDetails;