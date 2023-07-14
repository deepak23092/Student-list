import { React, useContext, useEffect, useState, useRef } from 'react'
import Readinfo from './Readinfo'
import infoContext from '../context/info/infoContext'

const Details = (props) => {

    let context = useContext(infoContext)
    const { getInfo, updateInfo } = context;

    useEffect(() => {
        getInfo();
        //eslint-disable-next-line
    }, [])
    
    const ref = useRef(null);
    const refClose = useRef(null);
    const [info, setInfo] = useState({ id: "", efirstname: "", elastname: "", ebranch: "", eyear: ""})

    const editInfo = (currentInfo) => {
        ref.current.click();
        setInfo({ id: currentInfo._id, efirstname: currentInfo.firstname, elastname: currentInfo.lastname, ebranch: currentInfo.branch, eyear: currentInfo.year })
    }

    const handleClick = (e) => {
        updateInfo(info.id, info.efirstname, info.elastname, info.ebranch, info.eyear)
        refClose.current.click();
        props.showAlert("Updated Successfully", "success")
    }

    const onChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <Readinfo editInfo={editInfo} showAlert={props.showAlert} />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" name="efirstname" value={info.efirstname} onChange={onChange} className="form-control" id="firstname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input type="text" name="elastname" value={info.elastname} onChange={onChange} className="form-control" id="lastname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="branch" className="form-label">Branch</label>
                                    <input type="text" name="ebranch" value={info.ebranch} onChange={onChange} className="form-control" id="branch" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="year" className="form-label">Year</label>
                                    <input type="text" name="eyear" value={info.eyear} onChange={onChange} className="form-control" id="year" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
