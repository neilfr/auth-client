import React from 'react'
import {NavLink} from "react-router-dom";

export const NavigationBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={"/login"} activeClassName={"active"}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={"/dashboard"} activeClassName={"active"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} activeClassName={"active"}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}