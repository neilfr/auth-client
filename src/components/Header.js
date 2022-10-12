import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <div>
            <ul>
                <li>
                    <NavLink to={"/home"} style={({isActive})=> isActive ? {fontWeight: 'bold'} : {fontWeight: 'normal'} }>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/dashboard"} style={({isActive})=> isActive ? {fontWeight: 'bold'} : {fontWeight: 'normal'} }>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} style={({isActive})=> isActive ? {fontWeight: 'bold'} : {fontWeight: 'normal'} }>About</NavLink>
                </li>
            </ul>

        </div>
    )
}