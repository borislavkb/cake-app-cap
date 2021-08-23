import "./Main.css";
import ItemCard from "./ItemCard";

export default function Main(recipe, onClick) {
  const recipes = JSON.parse(localStorage.getItem("recipesArray"));

  return (
    <main className="App-main">
      <ul>
        {recipes.map((recipe) => {
          return (
            <ItemCard
              key={recipe.id}
              name={recipe.cakeName}
              ingredients={recipe.cakeIngredients}
            />
          );
        })}
      </ul>
    </main>
  );
}
