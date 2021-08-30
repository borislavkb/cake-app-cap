import "./Favs.css";
import { RiFilePaper2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Favs() {
  const allFavouriteCakes = JSON.parse(
    localStorage.getItem("favouriteRecipes")
  );

  const [favouriteRecipes, setFavouriteRecipes] = useState(allFavouriteCakes);
  console.log(favouriteRecipes);
  function renderListOfFavs() {
    if (favouriteRecipes === null) {
      return <h3>There are no saved favourite items! </h3>;
    } else {
      return favouriteRecipes.map((recipe) => {
        return (
          <li className="Recipe-api__card" key={recipe.id}>
            <img src="" alt="" className="Recipe-api__card--image" />
            <div className="Recipe-api__card--body">
              <h2 className="Recipe-api__card--title">{recipe.label}</h2>
              <Link to={`/cakes/${recipe.id}`}>
                <RiFilePaper2Line className="Icon" />
              </Link>
            </div>
          </li>
        );
      });
    }
  }

  return (
    <main className="App-main">
      <ul>{renderListOfFavs()}</ul>
    </main>
  );
}
