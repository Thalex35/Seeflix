import bg from "../../assets/background/bg.jpeg";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h1>
        The Best Movies <br></br>& Shows, Anytime.
      </h1>
      <p>
        Discover the best movies and TV shows,<br></br> handpicked just for you.
      </p>
      <Link to="/media">
        <button id="get_started">Get Started</button>
      </Link>
    </section>
  );
}
