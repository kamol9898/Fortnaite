import React from "react";
import { NavLink } from 'react-router-dom'


export default function Navs(){
    return(
        <>
        <ul class="nav border">
            <li class="nav-item">
                <NavLink class="nav-link" to="/">HOME</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="box1">BOX1</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="box2">BOX2</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="box3">BOX3</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="nesting">Navs</NavLink>
            </li>
         </ul>
        </>
    )
}