import "./MyCakesList.css";
import { Link } from "react-router-dom";
import { RiFilePaper2Line } from "react-icons/ri";
import ChCakeImg from "../images/chocolate.png";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

const recipes = JSON.parse(localStorage.getItem("recipesArray"));

export default function MyCakesList() {
  const [list, setList] = useState(recipes);
  const [favs, setFavs] = useState([]);

  function handleDelete(id) {
    const updatedList = list.filter((cake) => cake.id !== id);
    setList(updatedList);
  }

  function toggleFavs(id) {
    const toggledList = list.filter((cake) => cake.id === id);

    const favoriteCakes =
      JSON.parse(localStorage.getItem("favoriteCakes")) || [];
    favoriteCakes.push(toggledList);
    localStorage.setItem("favoriteCakes", JSON.stringify(favoriteCakes));

    console.log(favoriteCakes);
  }

  function renderCakes() {
    return list.map((cake, index) => {
      const id = index + 1;
      return (
        <li className="ItemCard" key={cake.id}>
          <img src={ChCakeImg} alt="description" className="ItemCard__image" />

          <h2 className="ItemCard__name">{cake.cakeName}</h2>
          <div className="ItemCard--btnDiv">
            <button
              className="ItemCard__button delete"
              onClick={() => handleDelete(cake.id)}
            >
              X
            </button>
            <button className="ItemCard__button--fav">
              <MdFavoriteBorder
                onClick={() => toggleFavs(cake.id)}
                size="2rem"
                color="#d84064"
                className="ItemCard__toggle"
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

  return (
    <main className="App-main">
      <ul>{renderCakes()}</ul>
    </main>
  );
}
