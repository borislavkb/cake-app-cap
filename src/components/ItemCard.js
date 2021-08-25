import "./ItemCard.css";
import ChCakeImg from "../images/chocolate.png";
import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ItemCard(data, handleDelete) {
  return (
    <div className="ItemCard--box">
      <li className="ItemCard" key={data.id}>
        <img src={ChCakeImg} alt="description" className="ItemCard__image" />

        <h2 className="ItemCard__name">{data.name}</h2>
        <div className="ItemCard__button--box">
          <button className="ItemCard__button delete" onClick={handleDelete}>
            X
          </button>

          <Link to={`/cakes/${data.id}`} className="ItemCard__link">
            <RiFilePaper2Line className="Icon" />
          </Link>
        </div>
      </li>
    </div>
  );
}
