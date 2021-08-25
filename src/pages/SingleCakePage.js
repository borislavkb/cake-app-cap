import "./SingleCakePage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import mockImage from "../images/red.png";

export default function SingleCakePage() {
  const cakes = JSON.parse(localStorage.getItem("recipesArray"));

  const { id } = useParams();

  function renderSingleCake() {
    return (
      <main className="SinglePage__content">
        {cakes.map((cake, index) => {
          return (
            <div>
              <h2 className="SinglePage__cake--title" key={cake.id}>
                {cake.cakeName} {id}
              </h2>
              <img
                src={mockImage}
                alt={cake.cakeName}
                className="SinglePage__cake--image"
              />
              <h3>Ingredients:</h3>
              <p>{cake.cakeIngredients}</p>
              <h3>Recipe: </h3>
              <p>{cake.cakeRecipe}</p>
            </div>
          );
        })}
      </main>
    );
  }

  return renderSingleCake();
}
