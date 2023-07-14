import { React, useContext, useState } from 'react'
import infoContext from '../context/info/infoContext'
import { useNavigate } from 'react-router-dom'
import Pagination from './Pagination'

const Readinfo = (props) => {

    let context = useContext(infoContext)
    const { infos, deleteInfo } = context;

    const { editInfo } = props;

    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate('/')
    }

    const [page, setPage] = useState(1)
    const [detailsPerPage] = useState(10)

    const indexOfLastDetail = page * detailsPerPage;
    const indexOfFirstDetail = indexOfLastDetail - detailsPerPage;
    const currentInfos = infos.slice(indexOfFirstDetail, indexOfLastDetail)

    const paginate = (pageNumber) => {
        setPage(pageNumber)
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
                    {currentInfos.map((info) => {
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
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary mb-3" type="button" onClick={handleClick}>Register new Student</button>
                <Pagination detailsPerPage={detailsPerPage} detail={infos.length} paginate={paginate} />
            </div>

        </div>
    )
}

export default Readinfo
