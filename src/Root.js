import React from 'react'

import {AuthProvider} from "./AuthContext";
import MyRoutes from "./MyRoutes";

export const Root = () => {

    return (
        <div>
            <AuthProvider>
                <MyRoutes/>
            </AuthProvider>
        </div>
    )
}