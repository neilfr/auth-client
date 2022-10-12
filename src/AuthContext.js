import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [authed, setAuthed] = useState(false)

    const setLoggedIn = () => {
        console.log('set auth to true')
        // setAuthed(true)
    }

    const setLoggedOut = () => {
        console.log('set auth to false')
        // setAuthed(false)
    }

    return (
        <AuthContext.Provider value={{
            auth:authed,
            setLoggedIn:setLoggedIn,
            setLoggedOut:setLoggedOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}