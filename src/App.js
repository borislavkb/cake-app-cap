import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MyCakesList from "./pages/MyCakesList";
import Favs from "./pages/Favs";
import SingleCakePage from "./pages/SingleCakePage";
import AddNewCake from "./pages/AddNewCake";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListAPI from "./pages/ListAPI";
import About from "./pages/About";
import { useState, useEffect } from "react";

function App() {
  const [listOfCakes, setListOfCakes] = useState(
    JSON.parse(localStorage.getItem("recipesArray")) || []
  );

  const [listOfFavs, setListOfFavs] = useState(
    JSON.parse(localStorage.getItem("favouriteRecipes")) || []
  );

  useEffect(() => {
    localStorage.setItem("recipesArray", JSON.stringify(listOfCakes));
  }, [listOfCakes]);

  useEffect(() => {
    localStorage.setItem("favouriteRecipes", JSON.stringify(listOfFavs));
  }, [listOfFavs]);

  const handleAddNewRecipe = (newCake) =>
    setListOfCakes([...listOfCakes, newCake]);

  function handleDeleteItemFromList(id) {
    const updatedList = listOfCakes.filter((cake) => cake.id !== id);
    setListOfCakes(updatedList);
  }

  function handleToggleFavouriteCake(id) {
    const listOfFavouriteCakes = listOfCakes.filter(
      (savedRecipe) => savedRecipe.id === id
    );
    listOfFavouriteCakes[0].isFav = !listOfFavouriteCakes[0].isFav;

    const toggledRecipeIndex = listOfCakes.findIndex(
      (savedRecipe) => savedRecipe.id === id
    );
    setListOfFavs([
      ...listOfCakes.slice(0, toggledRecipeIndex),
      listOfFavouriteCakes[0],
      ...listOfCakes.slice(toggledRecipeIndex + 1),
    ]);
  }
  function handleDeleteItemFromFavs(id) {
    const updatedList = listOfFavs.filter((cake) => cake.id !== id);
    setListOfFavs(updatedList);
  }

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/cakes/:id">
          <SingleCakePage />
        </Route>
        <Route path="/favs">
          <Favs
            listOfFavs={listOfFavs}
            handleDeleteItemFromFavs={handleDeleteItemFromFavs}
            handleToggleFavouriteCake={handleToggleFavouriteCake}
          />
        </Route>
        <Route path="/API">
          <ListAPI />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/add">
          <AddNewCake
            listOfCakes={listOfCakes}
            handleAddNewRecipe={handleAddNewRecipe}
          />
        </Route>
        <Route exact path="/">
          <MyCakesList
            listOfCakes={listOfCakes}
            listOfFavs={listOfFavs}
            handleDeleteItemFromList={handleDeleteItemFromList}
            handleToggleFavouriteCake={handleToggleFavouriteCake}
          />
        </Route>
      </Switch>
      <Footer />
      <ToastContainer draggable={false} transition={Bounce} autoclose={5000} />
    </div>
  );
}
export default App;
