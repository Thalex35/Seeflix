import HomeCard from "./HomeCard.jsx";
import "./HomeList.css";

export default function HomeList({ title, items }) {
  return (
    <div className="Home_list">
      <h2 style={{ color: "white" }}>{title}</h2>
      <div className="Home_cards">
        {items.map((item) => (
          <HomeCard
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
