import "./ListAPI.css";
import { useEffect, useState } from "react";
import ItemCardAPI from "../components/ItemCardAPI";
const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function ListAPI({ object }) {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=${API_ID}&app_key=${API_KEY}`;
    fetch(url)
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
      return <ItemCardAPI props={cake} />;
    });
  }

  return renderRecipes();
}
