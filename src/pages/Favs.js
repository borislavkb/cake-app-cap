import "./Favs.css";
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Favs() {
  const [favouriteRecipes, setFavouriteRecipes] = useState(() => {
    const allFavouriteCakes = JSON.parse(
      localStorage.getItem("favouriteRecipes")
    );
    const filteredFavouriteRecipes = allFavouriteCakes.filter(
      (recipe) => !recipe.isFav
    );
    return filteredFavouriteRecipes || [];
  });

  function renderListOfFavs() {
    if (favouriteRecipes === null) {
      return <h3>There are no saved favourite items! </h3>;
    } else {
      return favouriteRecipes.map((recipe) => {
        return (
          <ItemCard object={recipe} paramsID={recipe.id} onToggleFav onDelete />
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
