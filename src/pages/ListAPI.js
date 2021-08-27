import "./ListAPI.css";
import { useEffect, useState } from "react";
import ItemCardAPI from "../components/ItemCardAPI";

export default function ListAPI({ object }) {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const API_ID = process.env.REACT_APP_CAKE_API_ID;
    const API_KEY = process.env.REACT_APP_CAKE_API_KEY;
    const edamamURL = `https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=${API_ID}&app_key=${API_KEY}`;
    fetch(edamamURL)
      .then((res) => res.json())
      .then((data) => {
        setCakes(data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function renderRecipes() {
    return cakes.map((cake, index) => {
      const id = index + 1;
      return <ItemCardAPI props={cake} id={id} />;
    });
  }

  return (
    <main className="App-main">
      <ul>{renderRecipes()}</ul>
    </main>
  );
}
