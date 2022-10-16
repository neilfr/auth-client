import React, {useContext, useState} from 'react'
import {AuthContext} from "../context/AuthContext";

export const Login = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor={"email"} >Email:</label>
                <input type={"text"} value={email} onChange={updateEmail}/>
            </div>
            <div>
                <label htmlFor={"password"}>Password:</label>
                <input type={"text"} value={password} onChange={updatePassword}/>
            </div>
            <div>
                <button onClick={()=>login(email, password)}>Submit</button>
            </div>
        </div>
    )
}