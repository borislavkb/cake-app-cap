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

  function handleDeleteItemFromList(id) {
    const updatedList = listOfCakes.filter((cake) => cake.id !== id);
    setListOfCakes(updatedList);
  }

  function handleToggleFavouriteCake(id) {
    const listOfFavouriteCakes = listOfCakes.map((cake) => {
      if (cake.id === id) {
        return {
          ...cake,
          isFav: !cake.isFav,
        };
      }
      return cake;
    });

    setListOfFavs(listOfFavouriteCakes);
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
