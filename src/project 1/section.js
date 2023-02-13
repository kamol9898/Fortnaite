import React, {useEffect, useState} from 'react'
import { API_KEY, API_URL } from './url'
import axios  from 'axios';
import Loading from './loading';
import Card from './card';
import Korzinka from './korzinka';
import Basket from './basket';
// import { toast } from 'react-toastify';
// import Erorr from './../router/erorr';



export default function Section(){
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [modal, setModal] = useState(false)

    console.log(order)
    useEffect(() => {
       axios.get(API_URL,{
           headers: {
            Authorization: API_KEY
           }   
       })
       .then((res) => {
        setInfo(res.data.featured)
        setLoading(false)
       })
    }, [])


    const showModal = () =>{
        setModal(!modal)
    }


  
    const addKorzinka = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
       
        if(itemIndex < 0){
            const newItem = {
          ...item,
          quantity: 1,
        };
        setOrder([...order, newItem]);
        }else{
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                   return {
                    ...orderItem,
                    quantity: orderItem.quantity+1
                   }
                }else{
                    return orderItem
                }
            });
            setOrder(newOrder)
        }
     

        
        
      };
    
      const remuveItem = (id) => {
          const delates = order.filter((item) => item.id !== id)
          setOrder(delates)
      }



      const increment = (itemId) => {
        const inc = order.map(item => {
            if(item.id == itemId){
                const newQuantity = item.quantity + 1
                return {
                  ...item,
                  quantity: newQuantity
                }
              }else{
                  return item
                }
        })

        setOrder(inc)
      }


      
      const dicrement = (itemId) => {
        const inc = order.map(item => {
            if(item.id == itemId){
                const newQuantity = item.quantity - 1
                return {
                  ...item,
                  quantity: newQuantity >= 0 ? newQuantity : 0
                }
              }else{
                  return item
                }
        })
        setOrder(inc)
      }



    return (
        <div className='content'>
            <div className="container">
                <Korzinka quantity={order.length} showModal={showModal}  />
                {loading ? <Loading/> : <Card info={info} addKorzinka={addKorzinka}/>}
            {modal && 
            <Basket 
            order={order} 
            remuveItem={remuveItem} 
            increment={increment}
            dicrement={dicrement}
            showModal={showModal}
            /> }
            </div>
        </div>
    )
}