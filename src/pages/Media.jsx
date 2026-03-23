import { trending_movies } from "../data/trending_movies.js";
import { top_shows } from "../data/top_shows.js";
import MediaList from "../components/Home/MediaList.jsx";
import "../Styles/Home.css";

export default function Media() {
  return (
    <section id="media" className="content_section">
      <div className="section_intro">
        <span className="section_eyebrow">Library</span>
        <h2>Browse the titles everyone is talking about.</h2>
        <p>
          A curated mix of blockbuster movies and binge-worthy shows collected
          in one place.
        </p>
      </div>
      <MediaList title="Popular Movies" items={trending_movies} />
      <MediaList title="Popular Shows" items={top_shows} />
    </section>
  );
}
