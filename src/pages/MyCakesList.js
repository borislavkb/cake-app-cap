import "./MyCakesList.css";
import { Link } from "react-router-dom";
import { RiFilePaper2Line } from "react-icons/ri";
import ChCakeImg from "../images/chocolate.png";
import { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { GiCakeSlice } from "react-icons/gi";

export default function MyCakesList() {
  const recipesLS = JSON.parse(localStorage.getItem("recipesArray"));
  const [listOfCakes, setListOfCakes] = useState(recipesLS);
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
    console.log(listOfFavouriteCakes);
  }

  function renderListOfCakeRecipes() {
    if (listOfCakes.length === 0) {
      return <p>There are no recipes currently stored. Add your recipe ! </p>;
    } else {
      return listOfCakes?.map((cake, index) => {
        const id = index + 1;
        return (
          <li className="ItemCard" key={cake.id}>
            <img
              src={ChCakeImg}
              alt="description"
              className="ItemCard__image"
            />

            <h2 className="ItemCard__name">{cake.cakeName}</h2>
            <div className="ItemCard--btnDiv">
              <button
                className="ItemCard__button delete"
                onClick={() => handleDeleteItemFromList(cake.id)}
              >
                X
              </button>
              <button className="ItemCard__button--fav">
                <MdFavoriteBorder
                  size="2rem"
                  color="#d84064"
                  className="ItemCard__toggle"
                  onClick={() => handleToggleFavouriteCake(cake.id)}
                />
              </button>

              <Link to={`/cakes/${id}`}>
                <RiFilePaper2Line
                  size="1.6rem"
                  color="#d84064"
                  className="ItemCard__link"
                />
              </Link>
            </div>
          </li>
        );
      });
    }
  }

  return (
    <main className="App-main">
      <ul>{renderListOfCakeRecipes()}</ul>
    </main>
  );
}
