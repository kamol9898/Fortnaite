

import React from 'react'

export default function Card(props){

    const {info, addKorzinka} = props
   

    return(
        <>
        <div className="container">
            <div className="row">
                {info.map((item, index) => (
                    <div className="col-md-4 my-3">
                        <div className="card">
                            <img className="card-img-top" src={item.full_background} alt="Card image"/>
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.description}</p>

                                    <div className='d-flex justify-content-between'>
                                        <h4>{item.price}$</h4>
                                        <button href="#" className="btn btn-primary" onClick={() => addKorzinka({...item})}>Buy</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
        
        </>
    )
}