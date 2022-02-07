import React from "react";
import NavListItem from "./NavListItem";
import "../styles/Header.scss";
import CartIcon from "./CartIcon";

const Header = ({ setCurrentCategory }) => {
  return (
    <nav id="navbar" className="nav">
      <p onClick={(e) => setCurrentCategory("All")}>Sparkles</p>
      <ul className="nav-list">
        <NavListItem title={"New"} setCurrentCategory={setCurrentCategory} />
        <NavListItem
          title={"Collections"}
          setCurrentCategory={setCurrentCategory}
        />
        <NavListItem
          title={"Engagement"}
          setCurrentCategory={setCurrentCategory}
        />
        <NavListItem title={"Sale"} setCurrentCategory={setCurrentCategory} />
      </ul>
      <CartIcon />
    </nav>
  );
};

export default Header;
