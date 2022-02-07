import React from "react";
import { Link } from "react-router-dom";
import "../styles/CartIcon.scss";

const CartIcon = () => {
  return (
    <div id="cart-icon">
      <Link to="/cart">
        <span className="p1 fa-stack fa-2x has-badge" data-count={4}>
          <i
            className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse"
            data-count="4b"
          ></i>
        </span>
      </Link>
      <div className="dropdown-content">
        <p>Hello World!</p>
      </div>
    </div>
  );
};

export default CartIcon;
