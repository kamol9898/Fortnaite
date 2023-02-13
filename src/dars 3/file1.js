import React from "react"
import File2 from "./file2"
import File3 from "./file3"
import '../dars 3/file.css'
import Foto from '../dars 3/ok.jpg'

const person = [
    {id:1, name: "Sardor", age:23},
    {id:2, name: "Eldor", age:24},
    {id:3, name: "begzod", age:34},
    {id:4, name: "Jamshid", age:25},
    {id:5, name: "Begzod", age:56},
    {id:6, name: "Akbar", age:65},
    {id:7, name: "Akrom", age:31},
]


const ism = 'Begzod turqin qursin'
const eror = 'Qochila Babuovla kelyapti'


export default function File1(){
    return(
        <>
        <div className="wrap">
          <div className="box1">
            {/* <img src={Foto} alt="" /> */}
          </div>
          
           
          <File2 ok={ism} data={person} />
        </div>
        <File3 ok={ism} er={eror}/>
        </>
    )
}





