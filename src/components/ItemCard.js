import "./ItemCard.css";

export default function ItemCard(props, onClick) {
  return (
    <div className="ItemCard box">
      <li className="ItemCard">
        {/* <img src={props.image} alt="description" className="ItemCard__image" /> */}

        <h2 className="ItemCard__name">{props.name}</h2>
        <p className="ItemCard__ingredients">{props.ingredients}</p>
      </li>
    </div>
  );
}
