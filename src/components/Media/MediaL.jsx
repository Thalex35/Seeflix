import MediaCard from "./MediaC";
import "./mediaL.css";

export default function MediaList({ items }) {
  return (
    <div className="media_list">
      <h1 style={{ color: "white" }}>List of our best movies and series</h1>
      <div className="media_cards">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            cover={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            rating={item.vote_average}
            releaseDate={item.release_date}
          />
        ))}
      </div>
    </div>
  );
}
