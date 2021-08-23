import "./Main.css";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Main(recipe, onClick) {
  const recipesDB = JSON.parse(localStorage.getItem("recipesArray"));

  const [recipes, setRecipes] = useState(recipesDB);

  return (
    <main className="App-main">
      <Link to={`/cakes/${recipe.id}`}>
        <div>
          {recipes.map((recipe) => {
            return <ItemCard key={recipe.id} name={recipe.cakeName} />;
          })}
        </div>
      </Link>
    </main>
  );
}
