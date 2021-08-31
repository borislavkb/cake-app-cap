import "./ListAPI.css";
import { useEffect, useState } from "react";
import ItemCardAPI from "../components/ItemCardAPI";

export default function ListAPI({ object }) {
  const [dataAPI, setDataAPI] = useState([]);

  const API_ID = process.env.REACT_APP_CAKE_API_ID;
  const API_KEY = process.env.REACT_APP_CAKE_API_KEY;
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=${API_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDataAPI(data.hits);
        console.log(data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function renderRecipes() {
    return dataAPI.map((cake) => {
      return <ItemCardAPI key={cake.id} props={cake} />;
    });
  }

  return (
    <main className="App-main">
      <ul>{renderRecipes()}</ul>
    </main>
  );
}
