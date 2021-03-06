import "./Favs.css";
import ItemCard from "../components/ItemCard";

export default function Favs({
  listOfFavs,
  handleDeleteItemFromFavs,
  handleToggleFavouriteCake,
}) {
  function renderListOfFavs() {
    if (listOfFavs.length === 0) {
      return (
        <h3 className="Message__text">There are no saved favourite items! </h3>
      );
    } else {
      return listOfFavs.map((recipe) => {
        if (recipe.isFav) {
          return (
            <ItemCard
              object={recipe}
              key={recipe.id}
              paramsId={recipe.id}
              onDelete={() => handleDeleteItemFromFavs(recipe.id)}
              onToggleFav={() => handleToggleFavouriteCake(recipe.id)}
            />
          );
        }
      });
    }
  }

  return (
    <main className="App-main">
      <ul>{renderListOfFavs()}</ul>
    </main>
  );
}
