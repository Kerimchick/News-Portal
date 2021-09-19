import React, {useEffect, useState} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-modal"

const Students = () => {
    const [students, setStudents] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false)
    useEffect(() => {
        axios("https://611675aa1c592d0017bb7f09.mockapi.io/students")
            .then(({data}) => setStudents(data))
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width : '50%'
        },
    };

    return (
        <div>
            <table className="table mt-2">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Contract amount</th>
                    <th scope="col">Paid</th>
                    <th scope="col">Netbook</th>
                    <th scope="col">Group</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((el, idx) =>
                        <tr>
                            <th scope="row">{idx + 1}</th>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>{el.contract}</td>
                            <td>{el.paid}</td>
                            <td>{el.notebook}</td>
                            <td>{el.group}</td>
                            <td>{el.comment}</td>
                            <td>{el.statusStudent}</td>
                            <td>
                                <button type="button" className="btn btn-warning me-2 btn-sm text-white">
                                    <FontAwesomeIcon icon={faEdit}/>
                                </button>
                                <button type="button" className="btn btn-danger me-2 btn-sm text-white">
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <button className="btn send-btn btn-primary" onClick={() => setIsOpen(true)}>Add new student</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style = {customStyles}
            >
                <form>
                    <div className="row">
                        <div className="col-6 w-50">
                            <label htmlFor="name" className="mb-1">Name</label>
                            <input type="text" id="name" className="form-control" autoComplete="off" name="name"
                                   required/>
                        </div>
                        <div className="col-6 w-50">
                            <label htmlFor="phone" className="mb-1">Phone number</label>
                            <input type="text" id="phone" className="form-control" autoComplete="off" name="phone"
                                   required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 w-50">
                            <label htmlFor="contract" className="mb-1">Amount contract</label>
                            <input type="text" id="contract" className="form-control" autoComplete="off" name="contract"
                                   required/>
                        </div>
                        <div className="col-6 w-50">
                            <label htmlFor="paid" className="mb-1">Paid</label>
                            <input type="text" id="paid" className="form-control" autoComplete="off" name="paid"
                                   required/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="mt-2 mb-1">Netbook</label>
                        <input type="text" id="phone" className="form-control input-normal" autoComplete="off" name="phone" required />
                    </div>
                    <div className="row position-form">
                        <div className="col-4">
                            <select className="form-select">
                                <option selected>Select group</option>
                                <option value="morning">Morning</option>
                                <option value="evening">Evening</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-select">
                                <option selected>Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-select">
                                <option selected>Select gender</option>
                                <option value="man">Male</option>
                                <option value="woman">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group green-border-focus">
                        <label htmlFor="exampleFormControlTextarea5">Enter comment</label>
                        <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModal()}>Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Students;