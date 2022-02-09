import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/Context.js";
import "../styles/SingleItem.scss";

const SingleItem = ({ id, name, price, description, image, inStock }) => {
  const { state, dispatch } = useContext(ShopContext);
  const [onhover, setOnhover] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const addToBag = (id, name, image) => {
    dispatch({ type: "addToBag", payload: { id, name, image } });
    setIsInCart(true);
  };

  const removeFromBag = (id) => {
    dispatch({ type: "removeFromBag", payload: id });
    setIsInCart(false);
  };

  return (
    <div
      className="item"
      onMouseEnter={() => setOnhover(true)}
      onMouseLeave={() => setOnhover(false)}
    >
      <p>
        {name.split(" ").map((word) => {
          return `${word[0].toUpperCase()}${word.slice(1)} `;
        })}
      </p>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image} alt="" />
      {isInCart && onhover && (
        <button onClick={() => removeFromBag(id)}>Remove From Bag</button>
      )}
      {!isInCart && onhover && inStock && (
        <button onClick={() => addToBag(id, name, image)}>Add To Bag</button>
      )}
      {onhover && !inStock && <p>Out of stock</p>}
    </div>
  );
};

export default SingleItem;
