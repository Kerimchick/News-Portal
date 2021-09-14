import React from 'react';
import Layout from "../../components/Layout";

const FormSignIn = () => {
    return (
        <Layout>
            <div className="offset-md-3 mt-4">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                               placeholder="email@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1"
                               placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-warning">Sign in</button>
                </div>
            </div>
        </Layout>
    );
};

export default FormSignIn;