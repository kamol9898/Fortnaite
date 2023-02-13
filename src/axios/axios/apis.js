import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Users from './../mosh/users';

function Apis() {
  const [dates, setDates] = useState([]);
  const apiEndponit = "https://jsonplaceholder.typicode.com/posts";
 

  useEffect(() => {
    const getPost = async () => {
     const {data: res} = await axios.get(apiEndponit)
     setDates(res)
    }
    getPost()
  }, []);

  // const hadlarsData =  (e) => {
  //     e.preventDefault();
  //     onAdd(e.target.title.value, e.target.body.value)
  //     e.target.title.value = ''
  //     e.target.body.value = ''
  // };



  // const onAdd = async ({title, body}) => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   axios.post(url, {
  //      title: title,
  //      body: body,
  //    })
  //    .then((res) => {
  //       setDates((dates) => [...dates, ...res])
  //    });
  // }


// const onAdd = async (title, body) => {
//     await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: title,
//           body: body
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then((res) => {
//         if(res.status !== 201){
//             return
//         }else{
//             return res.json()
//         }
//     })
//     .then((data) => {
//         setDates((dates) => [...dates, data] )
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }



// const delates = async (id) => {
//   await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: 'DELETE'
//   }).then((res) => {
//     if(res.status !== 200){
//       return
//     }else{
//       setDates(dates.filter((user) => {
//         return dates.id !== id
//       }))
//     }
//   })
// } 

const handlerUpdate = async (post) => {
    post.title = 'up'
    await axios.put(apiEndponit + '/' + post.id)
    const postClone = [...dates]
    const index = postClone.indexOf(post)
    postClone[index] = {...post}
    setDates(postClone)
}


const handlerDelate = async (post) => {
await axios.delete(apiEndponit + '/' + post.id + post)
setDates(dates.filter(p => p.id !== post.id))
}


const addPost = async () => {
  const post = { title: 'yangi Post',body: 'Hello World'}
 await axios.post(apiEndponit, post)
 setDates([post, ...dates])
}

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-5 offset-4">
            <button onClick={addPost} className="btn btn-info">Add</button>
          </div>
        </div>

        <div className="row">
          <div className="col-8 offset-3">
            <table className="table table-border">
              <tr>
                <th>titele</th>
                <th>Update</th>
                <th>Delate</th>
              </tr>
              <tbody>
                 {dates.map((item, index) => (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td><button onClick={() => handlerUpdate(item)} className="btn btn-info">Update</button></td>
                    <td><button onClick={() => handlerDelate(item)} className="btn btn-danger">Update</button></td>
                </tr>
              ))}
              </tbody>
            </table>
             
        
          </div>
        </div>
      </div>
    </>
  );
}

export default Apis;
