import { React, useContext } from 'react'
import infoContext from '../context/info/infoContext'
import { useNavigate } from 'react-router-dom'

const Readinfo = (props) => {

    let context = useContext(infoContext)
    const { infos, deleteInfo } = context;

    const { editInfo } = props;

    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate('/')
    }

    return (
        <div>
            <h2 className='my-3'>Details of Registered Students</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Branch</th>
                            <th scope="col">Year</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {infos.map((info) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{info.firstname}</td>
                                    <td>{info.lastname}</td>
                                    <td>{info.branch}</td>
                                    <td>{info.year}</td>
                                    <td><i className="fa-regular fa-pen-to-square mx-2" onClick={() => { editInfo(info) }}></i></td>
                                    <td><i className="fa-regular fa-trash-can mx-2" onClick={() => { deleteInfo(info._id); props.showAlert("Deleted Successfully", "success") }}></i></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
            <div class="d-grid gap-2 my-4">
                <button class="btn btn-primary h-4" type="button" onClick={handleClick}>Register new Student</button>
            </div>
        </div>
    )
}

export default Readinfo
