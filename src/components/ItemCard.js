import "./ItemCard.css";
import ChCakeImg from "../images/chocolate.png";
import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ItemCard(props, handleDelete) {
  return (
    <div className="ItemCard box">
      <li className="ItemCard" key={props.id}>
        <img src={ChCakeImg} alt="description" className="ItemCard__image" />

        <h2 className="ItemCard__name">{props.name}</h2>
        <div className="ItemCard__button--box">
          <button className="ItemCard__button delete" onClick={handleDelete}>
            X
          </button>

          <Link to={`/cakes/${props.id}`} className="ItemCard__link">
            <RiFilePaper2Line className="Icon" />
          </Link>
        </div>
      </li>
    </div>
  );
}
