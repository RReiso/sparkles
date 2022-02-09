import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/BagIcon.scss";
import { ShopContext } from "../context/Context.js";
import BagDropdown from "./BagDropdown";

const BagIcon = () => {
  const { state } = useContext(ShopContext);

  return (
    <div id="bag-icon">
      <Link to="/cart">
        <span
          className="p1 fa-stack fa-2x has-badge"
          data-count={state.cart.length}
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

export default BagIcon;
