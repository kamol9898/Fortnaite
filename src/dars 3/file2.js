import React from "react"

export default function File2(props){ 
    return(
        <>
        {/* <div className="box2">
            {props.data.map((item) => {
                return(
                    <>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <span>{item.age}</span>
                    </>
                )
            })}
        </div> */}

        <h1>{props.ok}</h1>
        </>
    )
}