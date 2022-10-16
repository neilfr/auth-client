import React, {useContext} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Footer = () => {
    const {logout} = useContext(AuthContext)

    return(
        <div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Footer