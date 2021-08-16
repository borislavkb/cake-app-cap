import "./ItemCard.css";

export default function ItemCard({ image }) {
  return (
    <div className="Item-card">
      <li className="Item-card">
        <img src={image} alt="description" />
        <h2 className="Item-card__name">Chocolate cake</h2>
      </li>
    </div>
  );
}
