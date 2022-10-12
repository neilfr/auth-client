import React from 'react'

import {AuthProvider} from "./AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./Login";
import RouteGuard from "./RouteGuard";
import Layout from "./Layout";
import About from "./pages/About";
import {Dashboard} from "./pages/Dashboard";
import Home from "./Home";

export const Root = () => {

    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/"} element={<Login/>}/>
                        <Route path={"/about"} element={<RouteGuard><Layout><About/></Layout></RouteGuard>}/>}
                        <Route path={"/dashboard"} element={<RouteGuard><Layout><Dashboard/></Layout></RouteGuard>}/>
                        <Route path={"/home"} element={<RouteGuard><Layout><Home/></Layout></RouteGuard>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}