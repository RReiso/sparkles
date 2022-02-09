import React, { useContext } from "react";
import { ShopContext } from "../context/Context.js";

const CartItem = ({ id, name, image, price, quantity }) => {
  const { dispatch } = useContext(ShopContext);

  const removeFromBag = (id) => {
    dispatch({ type: "removeFromBag", payload: id });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0 && newQuantity < 6) {
      dispatch({ type: "updateQuantity", payload: { id, newQuantity } });
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <img src={image} alt={name} />
        <span>{name}</span>
        <span>CAD {price}</span>
        <button onClick={() => updateQuantity(id, quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
        <span>CAD {(price * quantity).toFixed(2)}</span>
        <span onClick={() => removeFromBag(id)}>
          <i className="circle fa fa-solid fa-times-circle"></i>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
