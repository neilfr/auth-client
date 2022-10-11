import React from "react";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import About from "./pages/About";


function App() {
  return (
      <Routes>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>

  );
}

export default App;
