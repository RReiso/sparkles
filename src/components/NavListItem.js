import React from "react";

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
