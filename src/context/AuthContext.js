import React, {createContext, useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    let navigate = useNavigate()

    const [authed, setAuthed] = useState(false)

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

    const goHome = () => {
        navigate("/home")
    }

    const login = async (email, password) => {
        await getCsrf()
        try{
            const login = await http.post('/login', {
                email: email,
                password: password,
            })
            console.log('login =', login)
            updateAuthed(true)

        } catch (e){
            console.log('redirect back to clean login page with login failure message')
        }

        const user = await http.get('/api/user')
        console.log('user =', user)

        goHome()
    }

    const updateAuthed = (x) => {
        setAuthed(x)
    }

    const logout = () => {
        axios.post('/logout').then(
            (res) => {
                updateAuthed(false)
                navigate('/login')
            }
        )
    }

    return (
        <AuthContext.Provider value={{
            authed,
            updateAuthed,
            roles:['admin', 'user'],
            logout,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}