import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [authed, setAuthed] = useState(false)

    const updateAuthed = (x) => {
        setAuthed(x)
    }

    return (
        <AuthContext.Provider value={{
            authed:authed,
            updateAuthed:updateAuthed
        }}>
            {children}
        </AuthContext.Provider>
    )
}