import React, { useState } from 'react'
import axios from "axios"
import {redirect, useNavigate} from "react-router-dom";

export const Login = () => {

    let navigate = useNavigate();

    const goDashboard = () => {
        navigate("/dashboard")
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    axios.defaults.withCredentials=true
    axios.defaults.baseURL='http://localhost:8000'

    const http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
    })

    const getCsrf = async () => {
        const csrf = await http.get('/sanctum/csrf-cookie')
        console.log('csrf =', csrf)
    }

    const submitCredentials = async () => {
        await getCsrf()
        try{
            const login = await http.post('/login', {
                email: email,
                password: password,
            })
            console.log('login =', login)
        } catch (e){
            console.log('redirect back to clean login page with login failure message')
        }

        const user = await http.get('/api/user')
        console.log('user =', user)
        console.log('redirect to app logged in page')
        goDashboard()
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const logMeOut = () => {
        console.log('logmeout')
    }

    return (
        <div>
            <h2>Home</h2>
            <div>
                <label htmlFor={"email"} >Email:</label>
                <input type={"text"} value={email} onChange={updateEmail}/>
            </div>
            <div>
                <label htmlFor={"password"}>Password:</label>
                <input type={"text"} value={password} onChange={updatePassword}/>
            </div>
            <div>
                <button onClick={submitCredentials}>Submit</button>
            </div>
            <div>
                <button onClick={logMeOut}>Logout</button>
            </div>
        </div>
    )
}