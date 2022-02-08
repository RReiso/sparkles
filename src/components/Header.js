import React, { useContext } from "react";
import { CartContext } from "../context/Context.js";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import CartIcon from "./CartIcon";

const Header = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <nav id="navbar" className="nav">
      <Link to="/">
        <p>Sparkles</p>
      </Link>
      <ul className="nav-list">
        <Link className="nav-link" to="/all">
          All
        </Link>
        <Link className="nav-link" to="/new">
          New
        </Link>
        <Link className="nav-link" to="/luxury">
          Luxury
        </Link>
        <Link className="nav-link" to="/gifts">
          Gifts
        </Link>
        <Link className="nav-link" to="/sale">
          Sale
        </Link>
      </ul>
      <CartIcon />
    </nav>
  );
};

export default Header;
