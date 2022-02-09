import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingBag.scss";
import { ShopContext } from "../context/Context.js";
import BagDropdown from "./BagDropdown";

const ShoppingBag = () => {
  const { state } = useContext(ShopContext);
  const [totalBagItems, setTotalBagItems] = useState(0);

  useEffect(() => {
    const total = state.cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalBagItems(total);
  }, [state.cart]);

  return (
    <div id="bag-icon">
      <Link to="/cart">
        <span
          className="p1 fa-stack fa-2x has-badge"
          data-count={totalBagItems}
        >
          <i
            className="p3 fa fa-shopping-bag fa-stack-1x xfa-inverse"
            data-count="4b"
          ></i>
        </span>
      </Link>
      <BagDropdown />
    </div>
  );
};

export default ShoppingBag;
