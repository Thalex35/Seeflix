import { trending_movies } from "../data/trending_movies.js";
import { top_shows } from "../data/top_shows.js";
import Header from "../components/Header.jsx";
import Hero from "../components/Home/Hero.jsx";
import HomeList from "../components/Home/HomeList.jsx";
import Footer from "../components/Footer.jsx";
import "../Styles/Home.css";

export default function Home() {
  return (
    <section id="home">
      <Header />
      <Hero />
      <HomeList title="Trending Movies" items={trending_movies} />
      <HomeList title="Top TV Shows" items={top_shows} />
      <Footer />
    </section>
  );
}
