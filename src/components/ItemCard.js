import "./ItemCard.css";
import ChCakeImg from "../images/chocolate.png";

export default function ItemCard(props, onClick) {
  return (
    <div className="ItemCard box">
      <li className="ItemCard">
        <img src={ChCakeImg} alt="description" className="ItemCard__image" />

        <h2 className="ItemCard__name">{props.name}</h2>
      </li>
    </div>
  );
}
