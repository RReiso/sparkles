import React from "react";
import products from "../products/products.js";

const Items = ({ category }) => {
  return (
    <div>
      {products.map((pr) => {
        return (
          pr[category] && (
            <div>
              <p>{category}</p>
              <p>
                {pr.name.split(" ").map((word) => {
                  return word[0].toUpperCase() + word.slice(1) + " ";
                })}
              </p>
              <p>{pr.price}</p>
              <p>{pr.description}</p>
              <p>
                {category}: {String(pr[category])}
              </p>
              <img src={pr.image} alt="" />
            </div>
          )
        );
      })}
    </div>
  );
};

export default Items;
