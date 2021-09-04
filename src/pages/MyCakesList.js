import "./MyCakesList.css";
import { useState, useEffect } from "react";

import ItemCard from "../components/ItemCard";

export default function MyCakesList({
  listOfCakes,
  handleDeleteItemFromList,
  handleToggleFavouriteCake,
}) {
  function renderListOfCakeRecipes() {
    if (listOfCakes.length === 0) {
      return (
        <h3 className="App-main__message">
          There are no recipes currently stored. Add your recipe !{" "}
        </h3>
      );
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
