import React, {useContext} from 'react'
import {AuthContext} from "./AuthContext";
import {Navigate} from "react-router-dom";

const RequireAuth = ({children}) => {
    const {authed} = useContext(AuthContext)

    return authed === true ? children : <Navigate to="/login" />
}

export default RequireAuth