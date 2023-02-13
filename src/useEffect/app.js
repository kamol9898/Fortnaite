import React, { useState, useEffect} from 'react'
import Carta from './carta'



export default function App(){
    const [count, setCount] = useState([]);



        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setCount(json))
        }, []);


    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Manzil</h1>
                </div>
                <div className="col-8">
                   <Carta/> 
                </div>



            </div>
            <div className="row">
                <div className="col-12"> 
                <ul className="list-group">
                {count.map((item, index) => (
                    <li className="list-group-item active">{item.id} {item.title}</li>
                ))}
                </ul>
                </div>
            </div>
         </div>
        </>
    )
}