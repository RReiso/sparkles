import { useContext, useEffect, useState } from "react";
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
        ? state.products.map((item) => {
            return <SingleItem key={item.id} item={item} />;
          })
        : state.products.map((item) => {
            //return items with currentCategory(new, sale etc) set to 'true'
            return (
              item[currentCategory] && <SingleItem key={item.id} item={item} />
            );
          })}
    </div>
  );
};

export default Items;
