import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import Work from "./wrok"
import Home from "./home"
import Blog from "./blog"
import Contact from "./contact"


export default function App(){
    return(
        <>
        <ul class="nav border">
            <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/work">Wrok</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/blog">Blog</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        </>
    )
}