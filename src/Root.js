import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import About from "./pages/About";
import {Login} from "./Login";
import Home from "./Home";
import Layout from "./Layout";
import {AuthProvider} from "./AuthContext";

export const Root = () => {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/about"} element={<Layout><About/></Layout>}/>
                        <Route path={"/dashboard"} element={<Layout><Dashboard/></Layout>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/home"} element={<Layout><Home/></Layout>}/>
                        <Route path={"/"} element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}