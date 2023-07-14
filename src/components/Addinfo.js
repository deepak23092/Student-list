import { React, useContext, useState } from 'react'
import infoContext from '../context/info/infoContext'
import { useNavigate } from 'react-router-dom'


const Addinfo = (props) => {

    let context = useContext(infoContext)
    const { addInfo } = context

    let Navigate = useNavigate();

    const[info, setInfo] = useState({ firstname: "", lastname: "", branch: "", year: ""})

    const handleClick = (e) => {
        e.preventDefault();
        addInfo(info.firstname, info.lastname, info.branch, info.year);
        setInfo({ firstname: "", lastname: "", branch: "", year: ""});
        Navigate('/details');
        props.showAlert("Submited successfully", "success")
    }

    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }


    return (
        <div className='container'>
            <form>
            <h2 className='my-3'>Register Student</h2>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" name='firstname' value={info.firstname} className="form-control" id="firstname" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" name='lastname' value={info.lastname} className="form-control" id="lastname" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="branch" className="form-label">Branch</label>
                    <input type="text" name='branch' value={info.branch} className="form-control" id="branch" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input type="text" name='year' value={info.year} className="form-control" id="year" onChange={onChange} required />
                </div>
                <button disabled={info.firstname==="" || info.lastname==="" || info.branch==="" || info.year===""} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Addinfo
