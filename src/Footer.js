import React, {useContext} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";

const Footer = () => {
    const {setLoggedOut} = useContext(AuthContext)
    let navigate = useNavigate()
    const logout = () => {

        axios.post('/logout').then(
            (res) => {
                setLoggedOut()
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