import "./Favs.css";
import { useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Favs() {
  const allFavouriteCakes = JSON.parse(
    localStorage.getItem("favouriteRecipes")
  );

  const [favouriteRecipes, setFavouriteRecipes] = useState(allFavouriteCakes);

  function renderListOfFavs() {
    if (favouriteRecipes === null) {
      return <h3>There are no saved favourite items! </h3>;
    } else {
      return favouriteRecipes.map((recipe) => {
        return (
          <ItemCard object={recipe} paramsID={recipe.id} onDelete onToggleFav />
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
