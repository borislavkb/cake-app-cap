import "./ItemCard.css";
import ChCakeImg from "../images/chocolate.png";
import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ItemCard(props, handleDelete) {
  function handleDelete() {
    console.log("Clicked");
  }
  return (
    <div className="ItemCard box">
      <li className="ItemCard" key={props.id}>
        <img src={ChCakeImg} alt="description" className="ItemCard__image" />

        <h2 className="ItemCard__name">{props.name}</h2>
        <div className="ItemCard--btnDiv">
          <button
            className="ItemCard__button delete"
            onClick={() => handleDelete(props.id)}
          >
            X
          </button>

          <Link to={`/cakes/${props.id}`}>
            <RiFilePaper2Line
              size="1.6rem"
              color="#d84064"
              className="ItemCard__link"
            />
          </Link>
        </div>
      </li>
    </div>
  );
}
