import "./ListAPI.css";
import { useEffect, useState } from "react";
import ItemCardAPI from "../components/ItemCardAPI";

export default function ListAPI({ object }) {
  const API_ID = "0cab5025";
  const API_KEY = "39663efb82058e801b156ea8aee14b54";

  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const url =
      "https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=0cab5025&app_key=39663efb82058e801b156ea8aee14b54";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCakes(data.hits);
      });
  }, []);

  function renderRecipes() {
    return cakes.map((cake, index) => {
      const id = index + 1;
      console.log(cake);
      return <ItemCardAPI props={cake} />;
    });
  }

  return renderRecipes();
}
