import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header_content">
      <nav>
        <div className="logo">
          <Link to="/home">SeeFLIX</Link>
        </div>
        <div className="nav_links">
          <Link to="/home">Home</Link>
          <Link to="/media">Media</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
