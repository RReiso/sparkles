import React, { useContext, useState } from "react";
import { ShopContext } from "../context/Context.js";
import "../styles/SingleItem.scss";

const SingleItem = ({ id, name, price, description, image, inStock }) => {
  const { state, dispatch } = useContext(ShopContext);
  const [onhover, setOnhover] = useState(false);

  const isInCart = (id) => {
    return state.cart.some((item) => item.id === id);
  };

  const addToBag = (id, name, image) => {
    dispatch({ type: "addToBag", payload: { id, name, image, price } });
  };

  const removeFromBag = (id, price) => {
    dispatch({ type: "removeFromBag", payload: { id, price } });
  };

  return (
    <div
      className="item"
      onMouseEnter={() => setOnhover(true)}
      onMouseLeave={() => setOnhover(false)}
    >
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image} alt="" />
      {isInCart(id) && onhover && (
        <button onClick={() => removeFromBag(id, price)}>
          Remove From Bag
        </button>
      )}
      {!isInCart(id) && onhover && inStock && (
        <button onClick={() => addToBag(id, name, image, price)}>
          Add To Bag
        </button>
      )}
      {onhover && !inStock && <p>Out of stock</p>}
    </div>
  );
};

export default SingleItem;
