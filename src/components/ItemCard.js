import "./ItemCard.css";

export default function ItemCard({ image }) {
  return (
    <div className="ItemCard box">
      <li className="ItemCard">
        <img src={image} alt="description" className="ItemCard__image" />
        <h2 className="ItemCard__name">Chocolate cake</h2>
      </li>
    </div>
  );
}
