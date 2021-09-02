import "./ItemCardAPI.css";
import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ItemCardAPI({ props }) {
  let cakeID = props.recipe.uri.slice(-39);
  console.log(cakeID);
  return (
    <li className="Recipe-api__card one-edge-shadow" key={props.id}>
      <img
        src={props.recipe.image}
        alt={props.recipe.label}
        className="Recipe-api__card--image"
      />
      <div className="Recipe-api__card--body">
        <h2 className="Recipe-api__card--title">{props.recipe.label}</h2>
        <Link to={`cakes/${cakeID}`}>
          <RiFilePaper2Line className="Icon" />
        </Link>
      </div>
    </li>
  );
}
