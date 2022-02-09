import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ShopContext } from "../context/Context.js";
import SingleItem from "./SingleItem.js";

const Items = () => {
  const { state, dispatch } = useContext(ShopContext);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({
      type: "updateCategory",
      payload: { category: pathname.substring(1) },
    });
  }, [dispatch, pathname]);

  return (
    <div>
      <p>{state.currentCategory}</p>
      {state.products.map((pr) => {
        return (
          pr[state.currentCategory] && (
            <SingleItem
              key={pr.id}
              id={pr.id}
              name={pr.name}
              price={pr.price}
              description={pr.description}
              image={pr.image}
              inStock={pr.inStock}
            />
          )
        );
      })}
    </div>
  );
};

export default Items;
