import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { CartContext } from "../context/Context.js";
import SingleItem from "./SingleItem.js";

const Items = () => {
  const { state, dispatch } = useContext(CartContext);
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
              name={pr.name}
              price={pr.price}
              description={pr.description}
              image={pr.image}
            />
          )
        );
      })}
    </div>
  );
};

export default Items;
