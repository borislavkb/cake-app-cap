import "./ItemCard.css";
import ChCakeImg from "../images/chocolate.png";
import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ItemCard(props, handleDelete, showRecipe) {
  function handleDelete() {
    console.log("Clicked");
  }

  function showRecipe() {
    console.log("Recipe show");
  }
  return (
    <div className="ItemCard box">
      <li className="ItemCard">
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
              size="1.5rem"
              s
              color="#d84064"
              className="ItemCard__link"
              onClick={showRecipe}
            />
          </Link>
        </div>
      </li>
    </div>
  );
}
