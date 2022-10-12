import React, {useContext} from 'react'
import {AuthContext} from "./AuthContext";

const Home = () => {
    const {auth} = useContext(AuthContext)
    console.log('auth',auth)
    return(
        <div>
            <div>
                <h1>HOME</h1>
                <span>{auth.toString()}</span>
            </div>
        </div>
    )
}

export default Home