import React from "react";
import products from "../products/products.js";

const Items = ({ category }) => {
  return (
    <div>
      {products.map((pr) => {
        return (
          <div>
            <p>{category}</p>
            <p>{pr.name}</p>
            <p>{pr.price}</p>
            <p>{pr.description}</p>
            <p>
              {category}: {String(pr[category])}
            </p>
            <img src={pr.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
