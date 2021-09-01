import "./SingleCakePage.css";
import { useParams } from "react-router-dom";
import chocolateCake from "../images/chocolate.png";
import ReactStars from "react-rating-stars-component";

export default function SingleCakePage() {
  const { id } = useParams();

  const recipesArray = JSON.parse(localStorage.getItem("recipesArray")) || [];

  function renderSingleCake() {
    return recipesArray
      .filter((cake) => cake.id === id)
      .map((cake) => (
        <main className="SinglePage__content">
          <div className="SinglePage__content--box">
            <h2 className="SinglePage__cake--title relief">{cake.cakeName}</h2>
            <img
              className="SinglePage__cake--image"
              src={chocolateCake}
              alt=""
            />
            <ReactStars
              className="SinglePage__cake--rating"
              count={5}
              onChange
              size={24}
              activeColor="#ffd700"
              value={3}
            />

            <h3 className="SinglePage__cake--ingredients">Ingredients:</h3>
            <p className="SinglePage__cake--text">{cake.cakeIngredients}</p>
            <h3 className="SinglePage__cake--recipe">Recipe: </h3>
            <p className="SinglePage__cake--text">{cake.cakeRecipe}</p>
          </div>
        </main>
      ));
  }

  return renderSingleCake();
}
