import React from 'react';
import './App.css';
import Admin from "./components/Admin/admin";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route path={"/admin"} element={<Admin/>}/>
                <Route path={"/menu"} element={<Menu/>}/>
            </Routes>
        </div>
    );
}

export default App;
