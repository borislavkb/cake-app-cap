import "./ItemCard.css";
import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

export default function ItemCard({ object, paramsId, onDelete, onToggleFav }) {
  function handleDeleteItemFromList() {
    onDelete(object);
  }

  function handleToggleFavouriteCake() {
    onToggleFav(object);
  }

  return (
    <li className="ItemCard" key={object.id}>
      <img
        src={object.image_url}
        alt="description"
        className="ItemCard__image"
      />

      <h2 className="ItemCard__name">{object.cakeName}</h2>
      <div className="ItemCard__button--box">
        <button
          className="ItemCard__button delete"
          onClick={() => handleDeleteItemFromList(object.id)}
        >
          X
        </button>
        <button className="ItemCard__button--fav">
          <MdFavoriteBorder
            className="Icon"
            onClick={() => handleToggleFavouriteCake(object.id)}
          />
        </button>

        <Link to={`/cakes/${paramsId}`}>
          <RiFilePaper2Line className="Icon" />
        </Link>
      </div>
    </li>
  );
}
