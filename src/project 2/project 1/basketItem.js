import React from 'react';


function BasketItem(props) {
    const {id, name, price, quantity, remuveBasket,incrementQuantiti, dicrimentQuantiti} = props


    return ( 
        <>
       
          <ul class="list-group" key={id}>
                  <li className="list-group-item d-flex justify-content-between">
                   <div>
                   {name} x {quantity} = {price * quantity}<b>$</b>
                   </div>

                   <div>
                      <button className='btn btn-info' onClick={() => incrementQuantiti(id)}><span>+{quantity}</span> Add</button>
                      <button className='btn btn-info' onClick={() => dicrimentQuantiti(id)}><span>-{quantity}</span>Remuve</button>
                     <button onClick={() => remuveBasket(id)} className="btn btn-danger">Delate</button>
                   </div>
                  </li>
                </ul>
        
          
        </>
     );
}

export default BasketItem;