import "../Home/MediaList.css";
import "./mediaC.css";

export default function Mediacard({ title, cover, rating, releaseDate }) {
  return (
    <div className="media_card">
      <h3>{title}</h3>
      <img src={cover} alt={title} />
      <p>Rating : {rating}</p>
      <p>{releaseDate}</p>
    </div>
  );
}
