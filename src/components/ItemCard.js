import "./ItemCard.css";
import ChCakeImg from "../images/chocolate.png";

export default function ItemCard(props, onClick) {
  function handleDelete() {
    console.log("Clicked");
  }
  return (
    <div className="ItemCard box">
      <li className="ItemCard">
        <img src={ChCakeImg} alt="description" className="ItemCard__image" />

        <h2 className="ItemCard__name">{props.name}</h2>
        <button onClick={() => handleDelete(props.id)}>delete button</button>
      </li>
    </div>
  );
}
