import bg from "../../assets/background/bg.jpeg";
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
      <button id="get_started">Get Started</button>
    </section>
  );
}
