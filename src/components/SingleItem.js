import React, { useContext } from "react";
import { CartContext } from "../context/Context.js";
import "../styles/SingleItem.scss";

const SingleItem = ({ name, price, description, image }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <p>
        {name.split(" ").map((word) => {
          return word[0].toUpperCase() + word.slice(1) + " ";
        })}
      </p>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default SingleItem;
