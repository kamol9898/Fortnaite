import React from 'react'
import { BsCart2 } from "react-icons/bs";


export default function Korzinka(props){
    const { quantity = 0, showModal } = props
    return(
        <>
       
            <div className='d-flex kor' onClick={showModal} >
            <BsCart2 className='korIcon'/>
            <span className='count'>{{quantity} ? <b>{quantity}</b> : null}</span>
         </div>
     
         


    
        </>
    )
}