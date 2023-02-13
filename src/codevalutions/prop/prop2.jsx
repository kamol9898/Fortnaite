import React, {useState} from 'react'



export default function Prop2(props){
    const [name, setName] = useState('')


    function handlerChange(e){
      setName(e.target.value)
    }

    function submits(e){
       e.preventDefault()
       props.onSubmit(name)
    }

    return(
        <>
         <h1>{props.ism.length < 4 ? 'Ism yoq' : props.ism}</h1>
         <h1>{props.children}</h1>
            <form onSubmit={submits}>
                    <input onChange={handlerChange} value={name} type="text" />
                   <button type='submit'>Submit</button>
            </form>

        </>
    )
} 