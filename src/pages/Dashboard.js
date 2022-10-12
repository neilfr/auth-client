import React, {useEffect, useState} from 'react'
import axios from "axios";

export const Dashboard = () => {
    const [userInfo, setUserInfo] = useState({
        name:'',
        email:''
    })

    axios.defaults.withCredentials=true
    axios.defaults.baseURL='http://localhost:8000'

    useEffect(()=>{
        axios.get("/api/user")
            .then((res) => {
                console.log("user info:",res)
                setUserInfo(res.data)
            })
    }, [])


    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                {(userInfo && userInfo.data) ??
                    (<div>
                        <label>Name:</label>
                        <input type={"text"} value={userInfo.name} readOnly/>
                        <label>Email:</label>
                        <input type={"text"} value={userInfo.email} readOnly/>
                    </div>)}
            </div>
        </div>
    )
}