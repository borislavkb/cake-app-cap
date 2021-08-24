import "./MyCakesList.css";
import { Link } from "react-router-dom";
import { RiFilePaper2Line } from "react-icons/ri";
import ChCakeImg from "../images/chocolate.png";
import { useEffect, useState } from "react";

const recipes = JSON.parse(localStorage.getItem("recipesArray"));

export default function MyCakesList() {
  const [list, setList] = useState(recipes);

  function handleDelete(id) {
    const updatedList = list.filter((cake) => cake.id !== id);
    setList(updatedList);
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
