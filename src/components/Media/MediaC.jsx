import "../Home/HomeList.css";
import "./mediaC.css";

export default function Mediacard({ title, cover, rating, releaseDate }) {
  return (
    <div className="media_card">
      <h4>{title}</h4>
      <img src={cover} alt={title} />
      <p>Rating : {rating}</p>
      <p>{releaseDate}</p>
    </div>
  );
}
