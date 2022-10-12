import React from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    let navigate = useNavigate()
    const logout = () => {

        axios.post('/logout').then(
            (res) => {
                navigate('/login')
            }
        )
    }
    return(
        <div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Footer