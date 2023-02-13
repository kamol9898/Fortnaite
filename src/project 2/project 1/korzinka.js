import React from 'react';
import { BsCartPlus } from "react-icons/bs";

function Korzinka(props) {
    const { quantity = 0, modal =Function.prototype } = props


    return (  
        <>
        <div className='d-flex corz' onClick={modal}>
         <button className='btn btn-info'> <BsCartPlus/>
         {quantity ? <span className='quantity'>{quantity}</span> : null}</button>
        </div>
        </>
    );
}

export default Korzinka;