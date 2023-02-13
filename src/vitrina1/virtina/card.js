import React from 'react';
import { BsCartPlus } from "react-icons/bs";


function Cards(props) {
    const { quantity = 0 } = props
    return ( 
        <div className='d-flex corz'>
         <button className='btn btn-info'> <BsCartPlus/>
         {quantity ? <span className='quantity'>{quantity}</span> : null}</button>
        </div>
     );
}

export default Cards;