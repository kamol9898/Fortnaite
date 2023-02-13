import React from "react";

function GoodList(props) {
  
 

  const {goods = []} = props


  if(!goods.length){
    return <h3>Chiqmadi</h3>
  }
 
 
  return (
    <>
    <div className="container">
      <div className="row">
        {props.goods.map((item, index) => (
       <div className="col-md-3 my-2" key={item.id}>
         <div className="card">
          {/* {console.log(item.full_background.length) } */}
          <img className="card-img-top" src={item.full_background} alt={item.name}/>
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.description}</p>
          <hr />
          <div className="d-flex justify-content-between">
            <button className="btn btn-info">Buy</button>
          <a href="#" className="btn btn-primary" style={{fontSize: '1rem'}}>
           {item.price}$
          </a>
          </div>
        </div>
      </div> 
       </div>
      
    ))}
      </div>
    </div>
   
      
    </>
  );
}

export default GoodList;
