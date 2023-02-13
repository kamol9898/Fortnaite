import React from 'react'
import Prop2 from './prop2'


export default function Prop(){

    const ism = 'Sardor'


    const getData = (data) => {
        console.log('malumot keldimi', data);
        
    } 

    return(
        <>
        <h1>Prop 1 </h1>
        <Prop2 onSubmit={getData} ism={ism}>
            hello world
        </Prop2>
        </>
    )
} 