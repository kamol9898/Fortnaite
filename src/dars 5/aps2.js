import React from "react"


export default function Aps2(props){
    console.log(props.data);
    console.log(props.fun);

    return(
        <>
        <h1>Aps 2 {props.name} {props.yosh} {props.hunar} </h1>
        {props.data.map((item, index) => {
            return(
                <>
                <ul>
                    <li>{item.id} {item.name}</li>
                </ul>
                </>
            )
        })}

        <button onClick={props.fun}  className="btn btn-info">Salomlash</button>
        
        </>
    )
}


