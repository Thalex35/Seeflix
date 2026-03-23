import play from "../../assets/play.png";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="img">
          <img src={play} alt="play" />
        </div>
        <div className="menu">
          <h3>Menu</h3>
          <div className="nav-links">
            <Link to="/Home">Home</Link>
            <Link to="/Media">Media</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>(+509)32150000</p>
          <p>rue Metellus, Petion-Ville #30</p>
        </div>
      </div>
      <p className="para">All rights reserved SeeFlix 2026</p>
    </footer>
  );
}
