import React from 'react';
import Layout from "../../components/Layout";

const FormRegistration = () => {
    return (
        <Layout>
            <div className="offset-md-3 mt-4">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                               placeholder="Name..."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Surname</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                               placeholder="Family..."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                               placeholder="e-mail"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1"
                               placeholder="password..."/>
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </div>
            </div>
        </Layout>
    );
};

export default FormRegistration;