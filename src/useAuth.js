import React, {useState} from 'react'

const authContext = React.createContext()

const useAuth = () => {
    const [authed, setAuthed] = useState()

    return {
        authed,
        login() {
            return new Promise((res) => {
                setAuthed(true);
                res()
            })
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                res()
            })
        }
    }

}

export const AuthProvider = ({children}) => {
    const auth = useAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

const AuthConsumer = () => {
    return React.useContext(authContext)
}

export default AuthConsumer
