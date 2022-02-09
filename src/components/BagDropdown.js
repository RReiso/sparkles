import React, { useContext } from "react";
import "../styles/BagDropdown.scss";
import { ShopContext } from "../context/Context.js";

const BagDropdown = () => {
  const { state, dispatch } = useContext(ShopContext);

  return (
    <div className="dropdown-content">
      {state.cart.length > 0 ? (
        state.cart.map((item) => (
          <div className="dropdown-item" key={item.id}>
            <img src={item.image} alt={`${item.name}`} />
            <span>{item.name}</span>
            <span>CAD {item.price}</span>
            <span>
              <i className="circle fa fa-solid fa-times-circle"></i>
            </span>
          </div>
        ))
      ) : (
        <p>no items</p>
      )}
    </div>
  );
};

export default BagDropdown;
