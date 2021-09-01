import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ItemCardAPI({ props, id }) {
  return (
    <li className="Recipe-api__card" key={props.id}>
      <img
        src={props.recipe.image}
        alt={props.recipe.label}
        className="Recipe-api__card--image"
      />
      <div className="Recipe-api__card--body">
        <h2 className="Recipe-api__card--title">{props.recipe.label}</h2>
        <a href={props.recipe.url}>
          <RiFilePaper2Line className="Icon" />
        </a>
      </div>
    </li>
  );
}
