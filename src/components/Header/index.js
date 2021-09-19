import React, {useState} from 'react';
import "./style.css"
import image from "../image/ria.png"
import {Link, NavLink} from "react-router-dom";
import axios from "axios";


const Header = () => {
    const [openModal, setOpenModal] = useState(false)
    const [user, setUser] = useState({name: "", phone : "", email : ""})
    const [sentSuccess, setSentSuccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://611675aa1c592d0017bb7f09.mockapi.io/callback", user)
            .then(() => {
                setSentSuccess(true)
                setTimeout(() => {
                    setSentSuccess(false)
                    setOpenModal(false)
                }, 3000)
            })
    }
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
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
                        <NavLink to="/registration" className="link">Registration</NavLink>
                        <NavLink to="/students" className="link text-primary">Students</NavLink>
                        <NavLink to="/request" className="link text-danger">Request</NavLink>
                        <button className="btn btn-primary btn-position" onClick={() => setOpenModal(true)}>Feedback</button>
                    </div>
                </div>
                {
                    openModal &&
                    <div className="modal-window">
                        <div className="modal-content">
                            {
                                sentSuccess ? "Sent successfully" :
                                    <>
                                        <h2>Feedback form</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="name" className="col-form-label">Name:</label>
                                                <input type="text" id="name" className="form-control" autoComplete="off" onChange={handleChange} name="name" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone" className="col-form-label">Phone number:</label>
                                                <input type="text" id="phone" className="form-control" autoComplete="off" onChange={handleChange} name="phone" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-form-label">Email:</label>
                                                <input type="email" id="email" className="form-control" autoComplete="off" onChange={handleChange} name="email" required/>
                                            </div>
                                            <button type="submit" className="btn send-btn">Send</button>
                                        </form>
                                    </>
                            }
                            <button className="modal-close" onClick={() => setOpenModal(false)}>🗙</button>
                        </div>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;