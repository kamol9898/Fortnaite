import React from "react";
import { Link } from "react-router-dom";



export default function UserList(){
    return(
        <>
        <div className="container mt-3">
            <div className="row">
            <ul className="list-group">
                <li className="list-group-item mt-2 d-flex justify-content-between align-items-center">
                    Inbox
                    <div>
                         <Link to='edit/1' className="btn btn-primary">edit</Link>
                         <button className="btn ms-2 btn-danger">delate</button>
                    </div>
                </li>
                
                </ul>
            </div>
        </div>
        </>
    )
}