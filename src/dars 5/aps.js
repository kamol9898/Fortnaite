import React from "react"
import Aps2 from "./aps2"
import Aps3 from "./aps3"


export default function Aps(){

const ism = <span>Eldor</span>
const age = 55
const kasb = 'Oshpaz'

const info = [
    { id: 1, name: 'Jekichang'},
    { id: 2, name: 'Bryus le'},
    { id: 3, name: 'Vandam'},
    { id: 4, name: 'Azimxoja'},
    { id: 5, name: 'Akbar'},
]





    return(
        <>
        <h1>Hello World</h1>

        <Aps2 
          
        //   fun={Salom}  
          data={info} 
          name={ism} 
          yosh={age} 
          hunar={kasb}/>
        <Aps3 name={ism} yosh={age} hunar={kasb}/>
        <Aps3 name={ism} yosh={age} hunar={kasb}/>
        <Aps3 name={ism} yosh={age} hunar={kasb}/>
        </>
    )
}