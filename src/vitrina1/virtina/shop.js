import React, {useState, useEffect} from 'react';
import {API_KEY, API_URL} from './config'
import  axios  from 'axios';
import Loding from './loding';
import GoodList from './goodList';
import Cards from './card';


function Shop() {
    const [goods, setGoods] = useState([])
    const [loding, setLoding] = useState(true)
    const [order, setOrder] = useState([])


    useEffect(() => {
      axios.get(API_URL, {
        headers: {
            Authorization: API_KEY,
        }
      })
      .then((data) => {
        setGoods(data.data.featured)
        setLoding(false)
      })    
    }, [])

    return ( 
        <div className='content'>
          <Cards quantity={order.length}/>
            {loding ? <Loding/> : <GoodList goods={goods}/>}
        </div>
     );
}

export default Shop;