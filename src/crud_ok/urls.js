import React from "react";
import {Routes, Route} from 'react-router-dom'
import Add from "./add";
import Edit from "./edit";
import Home from "./home";



export default function Url(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">

        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#">Link 1</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link 2</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link 3</a>
            </li>
        </ul>
        </div>

        </nav>
        <Routes>
           <Route  path="/" element={<Home/>}/> 
           <Route path="add" element={<Add/>}/> 
           <Route path="edit/:id" element={<Edit/>}/> 
            
            
            
 
        </Routes>
       
        </>
    )
}