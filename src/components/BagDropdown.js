import React, { useContext } from "react";
import "../styles/BagDropdown.scss";
import { ShopContext } from "../context/Context.js";

const BagDropdown = () => {
  const { state, dispatch } = useContext(ShopContext);

  const removeFromBag = (id, price) => {
    dispatch({ type: "removeFromBag", payload: { id, price } });
  };

  console.log("state.totalPrice", state.totalPrice);
  return (
    <div className="dropdown-content">
      {state.cart.length > 0 ? (
        state.cart.map((item) => (
          <div className="dropdown-item" key={item.id}>
            <img src={item.image} alt={`${item.name}`} />
            <span>{item.name}</span>
            <span>CAD {item.price}</span>
            <span onClick={() => removeFromBag(item.id, item.price)}>
              <i className="circle fa fa-solid fa-times-circle"></i>
            </span>
          </div>
        ))
      ) : (
        <p>Your bag is empty!</p>
      )}
      {state.totalPrice.toFixed(2) > 0 && <p>{state.totalPrice.toFixed(2)}</p>}
    </div>
  );
};

export default BagDropdown;
