import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "./url";
import axios from "axios";
import Loading from "./loading";
import Card from "./card";
import Korzinka from "./korzinka";
import Basket from './basket';

export default function Section() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasket, setBasket] = useState(false)


  const modal = () => {
    setBasket(!isBasket)
  }

  const addKorzinka = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    console.log(itemIndex);
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
                quantity: orderItem.quantity + 1
               }
            }else{
                return orderItem
            }
        });
        setOrder(newOrder)
    }

    
  };


  const remuveBasket = (itemID) => {
     const newOrder = order.filter(item => item.id !== itemID)
     setOrder(newOrder)
  }

//  increment
  const incrementQuantiti  = (itemID) => {
       const newOrder = order.map(el => {
        if(el.id == itemID){
          const newQuantity = el.quantity + 1
          return {
            ...el,
            quantity: newQuantity
          }
        }else{
            return el
          }
       })
       setOrder(newOrder)
  }

  const dicrimentQuantiti  = (itemID) => {
    const newOrder = order.map(el => {
     if(el.id == itemID){
       const newQuantity = el.quantity - 1
       return {
         ...el,
         quantity: newQuantity >= 0 ? newQuantity : 0
       }
     }else{
         return el
       }
    })
    setOrder(newOrder)
}


  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((res) => {
        setInfo(res.data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <Korzinka quantity={order.length}  modal={modal}/>
        {loading ? <Loading /> : <Card info={info} addKorzinka={addKorzinka} />}
      {isBasket && 
      <Basket 
      order={order} 
      modal={modal} 
      remuveBasket={remuveBasket}
      incrementQuantiti={incrementQuantiti}
      dicrimentQuantiti={dicrimentQuantiti}
      />}
      </div>
    </div>
  );
}
