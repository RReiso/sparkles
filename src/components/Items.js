import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ShopContext } from "../context/Context.js";
import SingleItem from "./SingleItem.js";

const Items = () => {
  const { state } = useContext(ShopContext);
  const { pathname } = useLocation();
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    setCurrentCategory(pathname.substring(1));
  }, [pathname]);

  return (
    <div>
      <p>{currentCategory}</p>
      {currentCategory === "all"
        ? state.products.map((pr) => {
            return (
              <SingleItem
                key={pr.id}
                id={pr.id}
                name={pr.name}
                price={pr.price}
                description={pr.description}
                image={pr.image}
                inStock={pr.inStock}
              />
            );
          })
        : state.products.map((pr) => {
            return (
              pr[currentCategory] && (
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
