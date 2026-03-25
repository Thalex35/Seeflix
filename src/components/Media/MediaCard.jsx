import "../Home/MediaList.css";

export default function Mediacard({ title, cover, rating, type }) {
  return (
    <div className="media_card">
      <img src={cover} alt={title} />
      <h3 className="media_title">{title}</h3>
      <p className="media_rating">{rating}</p>
      <p className="media_type">{type}</p>
    </div>
  );
}
