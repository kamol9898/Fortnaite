import React from "react";
import BasketItem from "./basketItem";

function Basket(props) {
  const { order, modal, quantity, remuveBasket,incrementQuantiti, dicrimentQuantiti } = props;

  const jamiNarx = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <>
     <div className="opastis">
      <div className="col-md-5 offset-4 ol">
        <div className="card">
          <div className="card-header">Mahsulotlar</div>

          <div className="card-body">
            {order.length ?  order.map((item, index) => {
                return <BasketItem 
                key={item.id} 
                {...item} 
                remuveBasket={remuveBasket}
                incrementQuantiti={incrementQuantiti}
                dicrimentQuantiti={dicrimentQuantiti}
                />;
              })
             : (
              <li className="list-group-item">bosh</li>
            )} 
          </div>
          <div className="card-footer d-flex justify-content-between">
            <span>Maxsulot Jami narxi: {jamiNarx}</span>
            <button className="btn btn-danger w-25" onClick={modal}>
              Close
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Basket;
