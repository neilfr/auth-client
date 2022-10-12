import React, {useContext} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./Login";
import Home from "./Home";
import {AuthContext} from "./AuthContext";
import RequireAuth from "./RequireAuth";

const MyRoutes = () => {

    const {authed} = useContext(AuthContext)
    console.log('myroutes',authed)

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/about"} element={<RequireAuth><Layout><About/></Layout></RequireAuth>}/>}
                <Route path={"/dashboard"} element={<Layout><Dashboard/></Layout>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/home"} element={<Layout><Home/></Layout>}/>
                <Route path={"/"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes