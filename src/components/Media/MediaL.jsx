import MediaCard from "./MediaC";
import "./mediaL.css";

export default function MediaList({ items }) {
  return (
    <div className="media_list">
      <h2 style={{ color: "white" }}>List of our best movies and series</h2>
      <div className="media_cards">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            cover={item.cover}
            title={item.title}
            rating={item.rating}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}
