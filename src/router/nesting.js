import React from "react";
import { NavLink, Outlet } from 'react-router-dom'

export default function Nesting(){
    return(
        <>
        <input type="search" placeholder="nima Qidirdingiz" />
        
        <ul class="nav border">
            <li class="nav-item">
                <NavLink class="nav-link" to="product1">producs 1</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="product2">producs 2</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="product3">producs 3</NavLink>
            </li>
       
         </ul>

<div className="d-flex">
             <Outlet/>
            <h1>Lorem ipsum dolor sit.</h1>
</div>
           


        </>
    )
}