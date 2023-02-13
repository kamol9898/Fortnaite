import React, { useState } from 'react';




function UserInfo(props) {
    console.log(props.selectValue);


    return ( 
        <>
         <div className="col-8 mt-3">
            <div className='d-flex justify-content-between'>
                <select onChange={(e) => props.onChange(e.target.value)}  value={props.selectValue}  className='form-select my-3'>
                    <option selected disabled>Saralash</option>
                    <option value="ism">Ism</option>
                    <option value="emaili">Kasb</option>
                </select>
                
                <input type="text" onChange={(e) => props.setSearchhok(e.target.value)}  placeholder='Qidiruv' className='form-control h-50 mt-3'/>
            </div>
            <table className='table table-bordered'>
                <tr>
                    <td>Id</td>
                    <td>Ism</td>
                    <td>Email</td>
                    <td>Kasbi</td>
                    <td>Active</td>
                </tr>
                {props.data.length > 0 
                ?
                props.data.filter((item) => {
                    return props.searchvalue.toLowerCase() === '' ? item : item.ism.toLowerCase().includes(props.searchvalue)
                  }).map((item, index)=> {
                    return(
                        <>
                        <tr>     
                            <td>{index + 1}</td>
                            <td>{item.ism}</td>
                            <td>{item.emaili}</td>
                            <td>{item.kasbi}</td>
                            <td> <button onClick={() => props.remuv(item.id)} className='btn btn-danger text-dark'>delate</button></td>
                        </tr>
                        </>
                    
                    )})
                : <h1>Hech qanday malumot yoq</h1>
                }
            
            </table>
         </div>
        </>
     );
}

export default UserInfo;

