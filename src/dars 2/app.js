import React, {useState} from "react";
import  { Button, Container, 
    Input, Row, Col,
    Form, Label,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
}  from 'reactstrap';

import App2 from "./app2";
import App3 from "./app3";




export default function Apps(){
    const [count, setCount] = useState(0)

  
function increment(){
    setCount(count + 1)
}

function dicrement(){
    setCount(count - 1)
}

function res(){
    setCount(0)
}

    return(
        <>

          <h1>Count {count}</h1>
          <button onClick={increment}>O'sish+</button>
          <button onClick={res}>Restart</button>
          <button  onClick={dicrement}>Kamayish-</button>
         
          <Button>Tugmacha</Button>
          <Button color="success"> Hello World</Button>
          

          <App2/>
          <App3/>
          
     
          
        </>
    )
}

