import InfoContext from './infoContext'
import { useState } from 'react'

const InfoState = (props) => {

    let host = "http://localhost:4000"

    const infosInitial = []
    const [infos, setInfos] = useState(infosInitial)

    //Get info of all students
    const getInfo = async () => {
        const response = await fetch(`${host}/api/info/getinfo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();
        setInfos(json)
    }

    //add a student
    const addInfo = async (firstname, lastname, branch, year) => {
        //API Call
        const response = await fetch(`${host}/api/info/enter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, branch, year })
        })
        const info = await response.json();
        setInfos(infos.concat(info))
    }

    //Delete info of registered student
    const deleteInfo = async (id) => {
        const response = await fetch(`${host}/api/info/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        await response.json();

        //Delete at client
        const newInfos = infos.filter((info) => { return info._id !== id })
        setInfos(newInfos);
    }

    //Update info of registered student
    const updateInfo = async (id, firstname, lastname, branch, year) => {
        const response = await fetch(`${host}/api/info/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, branch, year })
        })
        await response.json()

        //Logic to update at client side
        let updatedInfo = JSON.parse(JSON.stringify(infos));
        for (let i = 0; i < updatedInfo.length; i++) {
            const element = updatedInfo[i];
            if (element._id === id) {
                element.firstname = firstname;
                element.lastname = lastname;
                element.branch = branch;
                element.year = year;
                break;
            }
        }
        setInfos(updatedInfo)
    }

    return (
        <InfoContext.Provider value={{ infos, addInfo, getInfo, deleteInfo, updateInfo }}>
            {props.children}
        </InfoContext.Provider>
    )
};

export default InfoState

