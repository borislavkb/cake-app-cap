import "./SingleCakePage.css";
import { useParams } from "react-router-dom";

import mockImage from "../images/red.png";
import { useEffect, useLayoutEffect, useState } from "react";

export default function SingleCakePage() {
  const cakes = JSON.parse(localStorage.getItem("recipesArray"));

  const { id } = useParams();
  const [cake, setCake] = useState(null);

  return (
    <main className="SinglePage__content">
      {cakes.map((cake, index) => {
        const id = index + 1;
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
