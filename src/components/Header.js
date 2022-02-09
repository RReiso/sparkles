import React, { useContext } from "react";
import { ShopContext } from "../context/Context.js";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import BagIcon from "./BagIcon";

const Header = () => {
  const { state, dispatch } = useContext(ShopContext);

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
      <BagIcon />
    </nav>
  );
};

export default Header;
