import React, { useContext } from "react";
import "../styles/BagIcon.scss";
import { ShopContext } from "../context/Context.js";

const BagDropdown = () => {
  const { state, dispatch } = useContext(ShopContext);

  return (
    <div className="dropdown-content">
      {state.cart.length > 0 ? <p>Hello World!</p> : <p>no items</p>}
    </div>
  );
};

export default BagDropdown;
