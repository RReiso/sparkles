import React from "react";
import "../styles/NavListItem.scss";

const NavListItem = ({ title, setCurrentCategory }) => {
  return (
    <li
      onClick={(e) => setCurrentCategory(e.target.innerHTML)}
      className="nav-link"
    >
      {title}
    </li>
  );
};

export default NavListItem;
