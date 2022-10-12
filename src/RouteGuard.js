import React, {useContext} from 'react'
import {AuthContext} from "./context/AuthContext";
import {Navigate} from "react-router-dom";

const RouteGuard = ({children}) => {
    const {authed} = useContext(AuthContext)

    return authed === true ? children : <Navigate to="/login" />
}

export default RouteGuard