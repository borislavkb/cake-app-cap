import "./MyCakesList.css";

import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function MyCakesList() {
  const [listOfCakes, setListOfCakes] = useState(() => {
    const recipesLS = JSON.parse(localStorage.getItem("recipesArray"));
    return recipesLS || [];
  });

  const [listOfFavs, setListOfFavs] = useState(() => {
    const favourites = JSON.parse(localStorage.getItem("favouriteRecipes"));
    return favourites || [];
  });

  useEffect(() => {
    localStorage.setItem("recipesArray", JSON.stringify(listOfCakes));
  }, [listOfCakes]);

  // saves to local if changed
  useEffect(() => {
    localStorage.setItem("favouriteRecipes", JSON.stringify(listOfFavs));
  }, [listOfFavs]);

  function handleDeleteItemFromList(id) {
    const updatedList = listOfCakes.filter((cake) => cake.id !== id);
    setListOfCakes(updatedList);
  }

  function handleToggleFavouriteCake(clickedRecipe) {
    const listOfFavouriteCakes = listOfCakes.map((cake) => {
      if (cake.id === clickedRecipe.id && cake.isFav) {
        return {
          ...cake,
          isFav: !cake.isFav,
        };
      }
    });

    setListOfFavs([...listOfFavs, listOfFavouriteCakes]);
  }

  function renderListOfCakeRecipes() {
    if (listOfCakes.length === 0) {
      return <p>There are no recipes currently stored. Add your recipe ! </p>;
    } else {
      return listOfCakes?.map((cake, index) => {
        const id = index + 1;
        return (
          <ItemCard
            object={cake}
            key={cake.id}
            paramsId={id}
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
