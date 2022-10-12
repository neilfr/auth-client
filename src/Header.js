import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <div>
            <ul>
                <li>
                    <NavLink to={"/home"} activeClassName={"active"}>Home</NavLink>
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