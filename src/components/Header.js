import { Link } from "react-router-dom";
import ShoppingBag from "./ShoppingBag";
import "../styles/components/Header.scss";
import { useState } from "react";

const Header = () => {
  const [isHamNavOpen, setIsHamNavOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamNavOpen(!isHamNavOpen);
  };

  return (
    <nav>
      <div className="nav-line">
        <button
          id="hamburger"
          aria-expanded={isHamNavOpen === true ? "true" : "false"}
          onClick={toggleHamburger}
        >
          &#9776;
        </button>
        <Link className="nav-title" to="/">
          <p>Sparkles</p>
        </Link>
        <ShoppingBag hamNav={true} />
      </div>
      <div className={isHamNavOpen === true ? "nav showNav" : "nav"}>
        <Link className="nav-title d-nav" to="/">
          <p>Sparkles</p>
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/all" onClick={toggleHamburger}>
              All
            </Link>
          </li>
          <li>
            <Link to="/new" onClick={toggleHamburger}>
              New
            </Link>
          </li>
          <li>
            <Link to="/luxury" onClick={toggleHamburger}>
              Luxury
            </Link>
          </li>
          <li>
            <Link to="/gifts" onClick={toggleHamburger}>
              Gifts
            </Link>
          </li>
          <li>
            <Link to="/sale" onClick={toggleHamburger}>
              Sale
            </Link>
          </li>
        </ul>
        <ShoppingBag hamNav={false} />
      </div>
    </nav>
  );
};

export default Header;
