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
import { useState, useEffect } from "react";

function App() {
  const [listOfCakes, setListOfCakes] = useState(() => {
    const recipesLS = JSON.parse(localStorage.getItem("recipesArray"));
    return recipesLS || [];
  });
  // eslint-disable-next-line no-unused-vars
  const [listOfFavs, setListOfFavs] = useState([]);

  useEffect(() => {
    localStorage.setItem("recipesArray", JSON.stringify(listOfCakes));
  }, [listOfCakes]);

  function handleDeleteItemFromList(id) {
    const updatedList = listOfCakes.filter((cake) => cake.id !== id);
    setListOfCakes(updatedList);
  }

  function handleToggleFavouriteCake(id) {
    const listOfFavouriteCakes = listOfCakes.map((cake) => {
      if (cake.id === id) {
        return {
          ...cake,
          isFav: !cake.isFav,
        };
      }
      return cake;
    });

    setListOfFavs(listOfFavouriteCakes);
  }

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/cakes/:id">
          <SingleCakePage />
        </Route>
        <Route path="/favs">
          <Favs />
        </Route>
        <Route path="/API">
          <ListAPI />
        </Route>

        <Route path="/add">
          <AddNewCake />
        </Route>
        <Route exact path="/">
          <MyCakesList
            listOfCakes={listOfCakes}
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
