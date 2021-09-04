import "./SingleCakePage.css";
import { useParams } from "react-router-dom";
import defaultImage from "../images/chocolate.png";
import { useHistory } from "react-router-dom";

export default function SingleCakePage() {
  const { id } = useParams();

  let history = useHistory();
  function returnHome() {
    return history.push("/");
  }

  const recipesArray = JSON.parse(localStorage.getItem("recipesArray")) || [];

  function renderSingleCake() {
    return recipesArray
      .filter((cake) => cake.id === id)
      .map((cake) => (
        <main className="SinglePage__content">
          <div>
            <img
              src={!cake.image_url ? defaultImage : cake.image_url}
              alt=""
              className="SinglePage__cake--image"
            />

            <h2 className="SinglePage__cake--title">{cake.cakeName}</h2>
            <h3 className="SinglePage__cake--title">Ingredients:</h3>
            <p className="SinglePage__cake--text">{cake.cakeIngredients}</p>
            <br></br>
            <hr className="style_eight"></hr>
            <h3 className="SinglePage__cake--title">Recipe: </h3>
            <p className="SinglePage__cake--text">{cake.cakeRecipe}</p>
            <button
              type="button"
              className="SinglePage_cake--button"
              onClick={returnHome}
            >
              Return home
            </button>
          </div>
        </main>
      ));
  }

  return renderSingleCake();
}
