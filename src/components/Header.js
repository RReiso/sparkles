import { Link } from "react-router-dom";
import "../styles/Header.scss";
import ShoppingBag from "./ShoppingBag";

const Header = () => {
  return (
    <nav id="navbar" className="nav">
      <Link to="/">
        <p>Sparkles</p>
      </Link>
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/all">
            All
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/new">
            New
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/luxury">
            Luxury
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/gifts">
            Gifts
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/sale">
            Sale
          </Link>
        </li>
      </ul>
      <ShoppingBag />
    </nav>
  );
};

export default Header;
