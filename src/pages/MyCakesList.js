import "./MyCakesList.css";
import { Link } from "react-router-dom";
import { RiFilePaper2Line } from "react-icons/ri";
import ChCakeImg from "../images/chocolate.png";

export default function MyCakesList() {
  const recipes = JSON.parse(localStorage.getItem("recipesArray"));

  function renderCakes() {
    return recipes.map((cake, index) => {
      const id = index + 1;
      return (
        <div className="ItemCard box">
          <li className="ItemCard" key={cake.id}>
            <img
              src={ChCakeImg}
              alt="description"
              className="ItemCard__image"
            />

            <h2 className="ItemCard__name">{cake.cakeName}</h2>
            <div className="ItemCard--btnDiv">
              <button className="ItemCard__button delete">X</button>

              <Link to={`/cakes/${id}`}>
                <RiFilePaper2Line
                  size="1.6rem"
                  color="#d84064"
                  className="ItemCard__link"
                />
              </Link>
            </div>
          </li>
        </div>
      );
    });
  }

  return (
    <main className="App-main">
      <ul>{renderCakes()}</ul>
    </main>
  );
}

{
  /* <div>
        {recipes.map((recipe) => {
          return <ItemCard key={recipe.id} name={recipe.cakeName} />;
        })}
      </div> */
}
