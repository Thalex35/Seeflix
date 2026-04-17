import "./HomeCard.css";

export default function MediaCard({ title, cover, rating }) {
  return (
    <div className="Home_card">
      <img src={cover} alt={title}></img>
      <h3 className="Home_title">{title}</h3>
      <p className="Home_rating">{rating}</p>
    </div>
  );
}
