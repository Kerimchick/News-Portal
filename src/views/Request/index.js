import React, {useEffect, useState} from 'react';
import axios from "axios";

const Request = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        axios("https://611675aa1c592d0017bb7f09.mockapi.io/callback")
            .then(({data}) => setTasks(data))
    }, [])
    return (
        <div>
            <h4 className="text-center text-danger mb-5 mt-2">List callback</h4>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">E-mail</th>
                </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(el =>
                            <tr>
                                <th scope="row">{el.id}</th>
                                <td>{el.name}</td>
                                <td>{el.phone}</td>
                                <td>{el.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};
export default Request;
