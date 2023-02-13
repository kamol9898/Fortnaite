import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import "aos/dist/aos.css";
import AOS from 'aos';

export default function Tudus(){
    const [users, setUsers] = useState([])
    const apis = 'https://jsonplaceholder.typicode.com/posts'



    useEffect(() => {

        AOS.init({
            duration : 2000
          });

        axios.get(apis)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])



async function addPost(){
    const post = { title: 'yangi Post',body: 'Hello World'}
    await axios.post(apis, post)
    setUsers([post, ...users])
}


const handlerDelate = async (post) => {
    console.log(post);
    // https://jsonplaceholder.typicode.com/posts/1
    await axios.delete(apis + '/' + post.id + post)
    setUsers(users.filter(p => p.id !== post.id))
    }



    const handlerUpdate = async (post) => {
        post.title = 'up'
        await axios.put(apis + '/' + post.id)
        const postClone = [...users]
        const index = postClone.indexOf(post)
        postClone[index] = {...post}
        setUsers(postClone)
    }


    return(
        <>
        <h1 data-aos={"fade-left"}  className='text-center'>Responst Tudu list {users.length}</h1>
            <div className="container">
            <div className="row">
                <div className="col-10 offset-2">
                    <button onClick={addPost} className='btn btn-info'>Add Post</button>
                </div>
            </div>

    <div className="row">
        <div className="col-10 offset-2">
            <table className='table table-bordered'>
              <tr>
                <th>Title</th>
                <th>Update</th>
                <th>Delates</th>
              </tr>
              <tbody>
                {users.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => handlerUpdate(item)} >Update</button>
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={() =>  handlerDelate(item)}>Delate</button>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
</div>


        </>
    )
}