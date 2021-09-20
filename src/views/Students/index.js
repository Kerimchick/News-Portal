import React, {useEffect, useState} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSdCard, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-modal"
import {useForm} from "react-hook-form"

const Students = () => {
    const [students, setStudents] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(students.name)
    const { register, handleSubmit, reset, formState:{errors} } = useForm()

    const closeModal = () => {
        setIsOpen(false)
    }
    const sendData = (data) => {
        axios.post("https://611675aa1c592d0017bb7f09.mockapi.io/students", data)
            .then(({data:student}) => {
                setStudents([...students, student])
                setIsOpen(false)
                reset()
            })
    }
    const deleteStudent = (id) => {
        axios.delete(`https://611675aa1c592d0017bb7f09.mockapi.io/students/${id}`)
            .then(() => setStudents(students.filter(el => el.id !== id)))
    }
    useEffect(() => {
        axios("https://611675aa1c592d0017bb7f09.mockapi.io/students")
            .then(({data}) => setStudents(data))
    }, [])

    const handleEdit = () => {
        setIsEdit(true)
    }
    const handleSave = () => {
        setIsEdit(false)

    }
    const handleNewValue = (e) => {
        setNewTitle(e.target.value)
    }

    const isDone = (id, status) => {
        axios.put(`https://611675aa1c592d0017bb7f09.mockapi.io/students/${id}`, {isDone: !status})
            .then(({data}) => setStudents(students.map(item => item.id === id ? data : item)))
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
                    <th scope="col">Phone</th>
                    <th scope="col">Contract</th>
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
                            <td>
                                {
                                    isEdit ? <input type="text" className='form-control-sm inp-width' defaultValue={el.name}
                                                    onChange={handleNewValue}/> :
                                    <span className={`${el.isDone && "text-decoration-line-through text-secondary"}`}>{el.name}</span>
                                }
                            </td>
                            <td>{
                                isEdit ? <input type="text" className='form-control-sm inp-width-bg' defaultValue={el.phone}
                                                onChange={handleNewValue}/> :
                                <span className={`${el.isDone && "text-decoration-line-through text-secondary"}`}>{el.phone}</span>
                            }</td>
                            <td>
                                {
                                    isEdit ? <input type="text" className='form-control-sm inp-width' defaultValue={el.contract}
                                                    onChange={handleNewValue}/> :
                                    <span className={`${el.isDone && "text-decoration-line-through text-secondary"}`}>{el.contract}</span>
                                }
                            </td>
                            <td>
                                {
                                    isEdit ? <input type="text" className='form-control-sm inp-width' defaultValue={el.paid}
                                                    onChange={handleNewValue}/> :
                                    <span className={`${el.isDone && "text-decoration-line-through text-secondary"}`}>{el.paid}</span>
                                }
                            </td>
                            <td>
                                {
                                    isEdit ? <input type="text" className='form-control-sm inp-width' defaultValue={el.notebook}
                                                    onChange={handleNewValue}/> :
                                        <span className={`${el.isDone && "text-decoration-line-through text-secondary"}`}>{el.notebook}</span>
                                }
                            </td>
                            <td>
                                {
                                    isEdit ?  <select className="form-select" name="group" defaultValue={el.group}>
                                        <option>Morning</option>
                                        <option>Evening</option>
                                    </select> : el.group
                                }
                            </td>
                            <td>
                                {
                                    isEdit ? <input type="text" className='form-control-sm inp-width' defaultValue={el.comment}
                                                    onChange={handleNewValue}/> :
                                        <span className={`${el.isDone && "text-decoration-line-through text-secondary"}`}>{el.comment}</span>
                                }
                            </td>
                            <td>
                                {
                                    isEdit ?
                                        <select className="form-select" name="status" defaultValue={el.status}>
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </select> : el.status
                                }
                            </td>
                            <td>
                                <button type="button" className="btn btn-warning me-2 btn-sm text-white"
                                        onClick={isEdit ? handleSave : handleEdit}>
                                    {

                                            <span className={`${students.isDone && "text-decoration-line-through text-secondary"}`} >{students.name}</span>
                                    }
                                    {
                                        isEdit ? <FontAwesomeIcon icon={faSdCard}/>: <FontAwesomeIcon icon={faPencilAlt}/>
                                    }
                                </button>
                                <button type="button" className="btn btn-danger me-2 btn-sm text-white"
                                onClick={() => deleteStudent(el.id)}>
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
                <form onSubmit={handleSubmit(sendData)}>
                    <div className="row">
                        <div className="col-6 w-50">
                            <label htmlFor="name" className="mb-1">Name</label>
                            <input type="text" id="name" className="form-control" autoComplete="off" name="name"
                                {...register("name", {required: true, pattern: /^[A-Za-z]+$/i, minLength : 3})}/>
                            {errors.name && <div className="text-danger">Please enter information using</div>}
                        </div>
                        <div className="col-6 w-50">
                            <label htmlFor="phone" className="mb-1">Phone number</label>
                            <input type="text" id="phone" className="form-control" autoComplete="off" name="phone"
                                   {...register("phone", {required: true})}/>
                            {errors.phone && <div className="text-danger">Please enter information using</div>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 w-50">
                            <label htmlFor="contract" className="mb-1">Amount contract</label>
                            <input type="text" id="contract" className="form-control" autoComplete="off" name="contract"
                                   {...register("contract", {required: true})}/>
                            {errors.contract && <div className="text-danger">Please enter information using</div>}
                        </div>
                        <div className="col-6 w-50">
                            <label htmlFor="paid" className="mb-1">Paid</label>
                            <input type="text" id="paid" className="form-control" autoComplete="off" name="paid"
                                   {...register("paid", {required: true})}/>
                            {errors.paid && <div className="text-danger">Please enter information using</div>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="notebook" className="mt-2 mb-1">Notebook</label>
                        <input type="text" id="notebook" className="form-control input-normal" autoComplete="off" name="phone"
                               {...register("notebook", {required: true, minLength : 3})}/>
                        {errors.notebook && <div className="text-danger">Please enter information using</div>}
                    </div>
                    <div className="row position-form">
                        <div className="col-4">
                            <select className="form-select" name="group" {...register("group",{required: true})}>
                                <option value="" selected disabled>Select group</option>
                                <option>Morning</option>
                                <option>Evening</option>
                            </select>
                            {errors.group && <div className="text-danger">Please enter information using</div>}
                        </div>
                        <div className="col-4">
                            <select className="form-select" name="status" {...register("status",{required: true})}>
                                <option value="" selected disabled>Select status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            {errors.status && <div className="text-danger">Please enter information using</div>}
                        </div>
                        <div className="col-4">
                            <select className="form-select" name="gender" {...register("gender",{required: true})}>
                                <option value="" selected disabled>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {errors.gender && <div className="text-danger">Please enter information using</div>}
                        </div>
                    </div>
                    <div className="form-group green-border-focus">
                        <label htmlFor="exampleFormControlTextarea5" className="mb-1">Enter comment</label>
                        <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"
                                  name="comment" {...register("comment",{required: true, minLength : 5})}/>
                        {errors.comment && <div className="text-danger">Please enter information using</div>}
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