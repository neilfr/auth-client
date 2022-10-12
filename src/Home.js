import React, {useContext} from 'react'
import {AuthContext} from "./AuthContext";

const Home = () => {
    const {authed} = useContext(AuthContext)
    console.log('auth',authed)
    return(
        <div>
            <div>
                <h1>HOME</h1>
            </div>
        </div>
    )
}

export default Home