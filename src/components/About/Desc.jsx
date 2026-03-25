import play from "../../assets/play.png";
import "./desc.css";

export default function Desc() {
  return (
    <section>
      <Presentation />
      <Mission />
    </section>
  );
}

function Presentation() {
  return (
    <section>
      <h1>SeeFLIX</h1>
      <h3>Watch movie and a better way</h3>
      <p>
        This is streaming web site developp by Theed which allow multiple person
        watch top movies
      </p>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission">
      <img src={play} alt="play" />
      <div className="para">
        <h2>Mission</h2>
        <p>
          We are a next generation streaming platform built to bring your
          favorite movies, shows and live events together in one place.
        </p>
        <p>
          Our mission is to connect creators and audiences through high-quality,
          ad-free entertainement - anytime, anywhere.
        </p>
      </div>
    </section>
  );
}
