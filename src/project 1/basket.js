import React from 'react'
import { BiTrash } from "react-icons/bi";

export default function Basket(props){
    const {order, remuveItem, increment, dicrement, showModal} = props

    const jamiNarx = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
      }, 0);
    
    return(
        <>
       
           <div className="container">
            <div className="row">
               
                    <div className="col-6  wrap">
                        <div className="card">
                            <div className="card-header">Zakaz qilinganlar</div>
                            <div className="card-body car1">
                            {order.map(item => (
                                <div className='d-flex justify-content-between'>
                                    {/* <span><img className='w-25' src={item.full_background} alt="" /></span> */}
                                    <span>{item.name} x {item.quantity} = <b className='text-info'>{item.price * item.quantity}$</b></span>
                                    <div>
                                        <button className='btn btn-info' onClick={() => increment(item.id)}>+Add</button>
                                        <button className='btn btn-danger' onClick={() => dicrement(item.id)}>-Remuve</button>
                                        <BiTrash className='delates' onClick={() => remuveItem(item.id)}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                Jami narx {jamiNarx}
                                <button className='btn btn-danger' onClick={showModal}>Close</button>
                            </div>
                        </div>
                    </div>
              
            </div>
        </div>  
      
       
        </>
    )
}