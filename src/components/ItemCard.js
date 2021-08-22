import "./ItemCard.css";

export default function ItemCard({ image, name, ingredients }) {
  return (
    <div className="ItemCard box">
      <li className="ItemCard">
        <img src={image} alt="description" className="ItemCard__image" />
        <h2 className="ItemCard__name">{name}</h2>
        <p className="ItemCard__ingredients">{ingredients}</p>
      </li>
    </div>
  );
}
