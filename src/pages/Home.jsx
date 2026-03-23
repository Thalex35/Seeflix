import { trending_movies } from "../data/trending_movies.js";
import { top_shows } from "../data/top_shows.js";
import Header from "../components/Home/Header.jsx";
import Hero from "../components/Home/Hero.jsx";
import MediaList from "../components/Home/MediaList.jsx";
import Footer from "../components/Home/Footer.jsx";
import "../Styles/Home.css";

export default function Home() {
  return (
    <section id="home">
      <Header />
      <Hero />
      <MediaList title="Trending Movies" items={trending_movies} />
      <MediaList title="Top TV Shows" items={top_shows} />
      <Footer />
    </section>
  );
}
