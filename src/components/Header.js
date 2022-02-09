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
      <ShoppingBag />
    </nav>
  );
};

export default Header;
