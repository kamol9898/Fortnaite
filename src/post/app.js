import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function App(){
    const [users, setUser] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        fetData()
    }, [])

    const fetData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUser(res.data)
          })

    }


    const onAdd = async (e) => {
        e.preventDefault()
        await axios.post('https://jsonplaceholder.typicode.com/users', {
            name:name,
            email:email
        }).then((data) => {
                setUser((users) => [...users, ...data])
            })
        .catch((err) => {
            console.log(err)
        })
    }

    // .then((data) => {
    //     setUser((users) => [...users, ...data])
    // })
 

    return(
        <>
        <h1 className='text-center'>Post Data</h1>

<form action="#"  className='d-flex justfy-content-center'>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
    <br />
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
    <button onClick={onAdd}>Add</button>
</form>

      <ul>
        {users.map((item) => (
            <li key={item.id}>{item.name} {item.email}</li>
        ))}
      </ul>
        </>
    )
}