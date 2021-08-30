import "./ListAPI.css";
import { useEffect, useState } from "react";
import ItemCardAPI from "../components/ItemCardAPI";

export default function ListAPI({ object }) {
  const [cakes, setCakes] = useState([]);

  const API_ID = process.env.REACT_APP_CAKE_API_ID;
  const API_KEY = process.env.REACT_APP_CAKE_API_KEY;
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=0cab5025&app_key=39663efb82058e801b156ea8aee14b54`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCakes(data.hits);
        console.log(data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function renderRecipes() {
    return cakes.map((cake, key) => {
      return <ItemCardAPI key={cake.id} props={cake} paramsID={cake.uri} />;
    });
  }

  return (
    <main className="App-main">
      <ul>{renderRecipes()}</ul>
    </main>
  );
}
