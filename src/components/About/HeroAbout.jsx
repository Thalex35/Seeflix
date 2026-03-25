import bgt from "../../assets/Bgt.jpg";
import "./hero.css";

export default function HeroAbout() {
  return (
    <section className="hero_about" style={{ backgroundImage: `url(${bgt})` }}>
      <h1>About us</h1>
    </section>
  );
}
