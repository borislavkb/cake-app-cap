export default function ItemCardAPI({ props }) {
  return (
    <div className="Recipe-api__card" key={props.id}>
      <img
        src={props.recipe.image}
        alt={props.recipe.label}
        className="Recipe-api__card--image"
      />
      <div className="Recipe-api__card--body">
        <h2 className="Recipe-api__card--title">{props.recipe.label}</h2>
      </div>
    </div>
  );
}
