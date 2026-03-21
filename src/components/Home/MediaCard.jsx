import "./MediaCard.css";

export default function MediaCard({ title, cover, rating }) {
  return (
    <div className="media_card">
      <img src={cover} alt={title}></img>
      <h3 className="media_title">{title}</h3>
      <p className="media_rating">{rating}</p>
    </div>
  );
}
