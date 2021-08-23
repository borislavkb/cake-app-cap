import "./Main.css";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import { directive } from "@babel/types";

export default function Main(recipe, onClick) {
  const recipes = JSON.parse(localStorage.getItem("recipesArray"));

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
