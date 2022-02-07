import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <nav id="navbar" className="nav">
      <Link to="/">
        <p>Sparkles</p>
      </Link>
      <ul className="nav-list">
        <Link className="nav-link" to="/new">
          New
        </Link>
        <Link className="nav-link" to="/collections">
          Collections
        </Link>
        <Link className="nav-link" to="/engagement">
          Engagement
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
