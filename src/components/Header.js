import React from "react";
import NavListItem from "./NavListItem";

const Header = ({ setCurrentCategory }) => {
  return (
    <nav id="navbar" className="nav">
      <p onClick={(e) => setCurrentCategory("all")}>Sparkles</p>
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
    </nav>
  );
};

export default Header;
