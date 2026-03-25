import MediaCard from "../Media/MediaCard";
import "../Home/MediaList.css";

export default function MediaList({ items }) {
  return (
    <div>
      <h1>List of our best movies and series</h1>
      <div className="media_cards">
        <MediaCard
          cover={items.cover}
          title={items.title}
          rating={items.cover}
          type={items.type}
        />
      </div>
    </div>
  );
}
