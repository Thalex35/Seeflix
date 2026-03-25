import play from "../../assets/play.png";
import "./desc.css";

export default function Desc() {
  return (
    <section className="About">
      <h1>About SeeFLIX</h1>
      <Presentation />
      <Mission />
    </section>
  );
}

function Presentation() {
  return (
    <section className="presentation">
      <h3>Who we are ? </h3>
      <p>
        Seeflix is a modern media discovery platform designed to help users
        explore a wide selection of movies and TV shows in a simple and
        intuitive way. The platform brings together popular films, international
        series, and anime content in one organized space, making it easier for
        users to browse, compare ratings, and find something interesting to
        watch. With its clean interface and accessible navigation, Seeflix aims
        to provide an enjoyable browsing experience for anyone looking for
        quality entertainment.
      </p>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission">
      {/* <img src={play} alt="play" /> */}
      <h3>Our Mission</h3>
      <p>
        Our mission at Seeflix is to make discovering movies and TV shows
        easier, faster, and more engaging for everyone. We aim to create a
        platform that highlights diverse content from different cultures and
        genres while keeping the experience clear and user-friendly. By offering
        a structured catalog and simple navigation, Seeflix helps users quickly
        find their favorite content and discover new titles that match their
        interests.
      </p>
    </section>
  );
}
