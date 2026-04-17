import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MediaList from "../components/Media/MediaL";
export default function Media() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((fetchError) => {
        console.error("Error fetching movies:", fetchError);
      });
  }, []);

  return (
    <div>
      <Header />
      <MediaList items={movies} />
      <Footer />
    </div>
  );
}
