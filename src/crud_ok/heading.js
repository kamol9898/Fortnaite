import React from "react";
import { Link } from "react-router-dom";



export default function Heading(){
    return(
        <>
       
            <div class="container bg-dark text-white d-flex justify-content-between">
                <Link to='/' class="navbar-text">Navbar text</Link>
                <Link to='/add'  className="btn btn-info my-2" type="submit">Add User</Link>
            </div>
      
        </>
    )
}