import "./SingleCakePage.css";
import { useParams } from "react-router-dom";
import chocolateCake from "../images/chocolate.png";

export default function SingleCakePage() {
  const { id } = useParams();

  const recipesArray = JSON.parse(localStorage.getItem("recipesArray")) || [];

  function renderSingleCake() {
    return recipesArray
      .filter((cake) => cake.id === id)
      .map((cake) => (
        <main className="SinglePage__content">
          <div>
            <h2 className="SinglePage__cake--title">{cake.cakeName}</h2>
            <img
              src={chocolateCake}
              alt=""
              className="SinglePage__cake--image"
            />
            <h3>Ingredients:</h3>
            <p>{cake.cakeIngredients}</p>
            <h3>Recipe: </h3>
            <p>{cake.cakeRecipe}</p>
          </div>
        </main>
      ));
  }

  return renderSingleCake();
}
