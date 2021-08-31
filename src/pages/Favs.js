import "./Favs.css";
import ItemCard from "../components/ItemCard";

export default function Favs({
  listOfFavs,
  handleDeleteItemFromList,
  handleToggleFavouriteCake,
}) {
  const filteredFavouriteRecipes = listOfFavs.filter((recipe) => !recipe.isFav);

  function renderListOfFavs() {
    if (listOfFavs === null) {
      return <h3>There are no saved favourite items! </h3>;
    } else {
      return filteredFavouriteRecipes.map((recipe) => {
        return (
          <ItemCard
            object={recipe}
            key={recipe.id}
            paramsId={recipe.id}
            onDelete={() => handleDeleteItemFromList(recipe.id)}
            onToggleFav={() => handleToggleFavouriteCake(recipe.id)}
          />
        );
      });
    }
  }

  return (
    <main className="App-main">
      <ul>{renderListOfFavs()}</ul>
    </main>
  );
}
