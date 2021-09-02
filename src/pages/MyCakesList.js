import "./MyCakesList.css";

import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function MyCakesList() {
  const [listOfCakes, setListOfCakes] = useState(() => {
    const recipesLS = JSON.parse(localStorage.getItem("recipesArray"));
    return recipesLS || [];
  });
  // eslint-disable-next-line no-unused-vars
  const [listOfFavs, setListOfFavs] = useState([]);

  useEffect(() => {
    localStorage.setItem("recipesArray", JSON.stringify(listOfCakes));
  }, [listOfCakes]);

  useEffect(() => {
    localStorage.setItem("favoritesArray", JSON.stringify(listOfFavs));
  }, [listOfFavs]);

  function handleDeleteItemFromList(id) {
    const updatedList = listOfCakes.filter((cake) => cake.id !== id);
    setListOfCakes(updatedList);
  }
  // very slick solution from Adriana
  function handleToggleFavouriteCake(id) {
    const listOfFavouriteCakes = listOfCakes.filter(
      (savedRecipe) => savedRecipe.id === id
    );
    listOfFavouriteCakes[0].isFav = !listOfFavouriteCakes[0].isFav;

    const toggledRecipeIndex = listOfCakes.findIndex(
      (savedRecipe) => savedRecipe.id === id
    );
    setListOfFavs([
      ...listOfCakes.slice(0, toggledRecipeIndex),
      listOfFavouriteCakes[0],
      ...listOfCakes.slice(toggledRecipeIndex + 1),
    ]);
  }

  function renderListOfCakeRecipes() {
    if (listOfCakes.length === 0) {
      return <p>There are no recipes currently stored. Add your recipe ! </p>;
    } else {
      return listOfCakes?.map((cake, index) => {
        return (
          <ItemCard
            object={cake}
            key={cake.id}
            paramsId={cake.id}
            onDelete={() => handleDeleteItemFromList(cake.id)}
            onToggleFav={() => handleToggleFavouriteCake(cake.id)}
          />
        );
      });
    }
  }

  return (
    <main className="App-main">
      <ul>{renderListOfCakeRecipes()}</ul>
    </main>
  );
}
