import React, {useContext} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Footer = () => {
    const {updateAuthed, authed} = useContext(AuthContext)
    let navigate = useNavigate()
    const logout = () => {

        axios.post('/logout').then(
            (res) => {
                updateAuthed(false)
                navigate('/login')
            }
        )
    }
    return(
        <div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
            <span>{authed.toString()}</span>
        </div>
    )
}

export default Footer