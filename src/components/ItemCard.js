import "./ItemCard.css";
import { Link } from "react-router-dom";
import {
  IoHeart,
  IoHeartOutline,
  IoTrashBinOutline,
  IoBookOutline,
} from "react-icons/io5";
import defaultImage from "../images/chocolate.png";

export default function ItemCard({ object, onDelete, onToggleFav }) {
  function handleDeleteItemFromList() {
    onDelete(object);
  }

  function handleToggleFavouriteCake() {
    onToggleFav(object);
  }

  return (
    <li className="ItemCard one-edge-shadow" key={object.id}>
      <img
        src={!object.image_url ? defaultImage : object.image_url}
        alt="description"
        className="ItemCard__image grow"
      />

      <h2 className="ItemCard__name">{object.cakeName}</h2>
      <div className="ItemCard__button--box">
        <icon
          className="ItemCard__button left"
          onClick={() => handleDeleteItemFromList(object.id)}
        >
          <IoTrashBinOutline className="Icon_card" />
        </icon>
        <icon className="ItemCard__button">
          {object.isFav ? (
            <IoHeart
              className="Icon_card"
              onClick={() => handleToggleFavouriteCake(object.id)}
            />
          ) : (
            <IoHeartOutline
              className="Icon_card"
              onClick={() => handleToggleFavouriteCake(object.id)}
            />
          )}
        </icon>

        <Link to={`/cakes/${object.id}`} className="ItemCard__button right">
          <IoBookOutline className="Icon_card" />
        </Link>
      </div>
    </li>
  );
}
