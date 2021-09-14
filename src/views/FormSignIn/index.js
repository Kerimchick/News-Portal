import React from 'react';

const FormSignIn = () => {
    return (
            <div className="offset-md-3 mt-4">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                               placeholder="e-mail...."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1"
                               placeholder="password...."/>
                    </div>
                    <button type="submit" className="btn btn-warning">Sign in</button>
                </div>
            </div>
    );
};

export default FormSignIn;