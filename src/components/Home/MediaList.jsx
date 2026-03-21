import MediaCard from "./MediaCard.jsx";
import "./MediaList.css";

export default function MediaList({ title, items }) {
  return (
    <div className="media_list">
      <h2 style={{ color: "white" }}>{title}</h2>
      <div className="media_cards">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            cover={item.cover}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
