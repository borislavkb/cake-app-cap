import "./MyCakesList.css";
import ItemCard from "../components/ItemCard";

export default function MyCakesList() {
  const recipes = JSON.parse(localStorage.getItem("recipesArray"));

  return (
    <main className="App-main">
      <div>
        {recipes.map((recipe) => {
          return <ItemCard key={recipe.id} name={recipe.cakeName} />;
        })}
      </div>
    </main>
  );
}
