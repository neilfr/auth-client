import React from 'react'
import {NavigationBar} from "./NavigationBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import About from "./pages/About";
import {Login} from "./Login";

export const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar/>
                <div>
                    <Routes>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/dashboard"} element={<Dashboard/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}