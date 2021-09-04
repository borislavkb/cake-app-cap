import "./SinglePageAPI.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import chocolateCake from "../images/chocolate.png";

//https://api.edamam.com/api/recipes/v2/{id}

export default function ListAPISinglePage() {
  const { cakeID } = useParams();
  console.log(cakeID);
  const [recipeAPI, setRecipeAPI] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.edamam.com/api/recipes/v2/${cakeID}?type=public&app_id=0cab5025&app_key=39663efb82058e801b156ea8aee14b54`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipeAPI(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cakeID]);

  function renderRecipe() {
    if (isLoading || recipeAPI === null) {
      return "Loading...";
    }

    return (
      <main className="SinglePageAPI__content">
        <div className="SinglePageAPI__content--box">
          <img
            className="SinglePageAPI__cake--image"
            src={recipeAPI?.recipe.image}
            alt="current recipe"
          />
          <h2 className="SinglePageAPI__cake--title relief">
            {recipeAPI?.recipe.label}
          </h2>
          <hr></hr>

          <a href={recipeAPI?.recipe.url} className="SinglePageAPI__link">
            Link to the external source of the recipe
          </a>
        </div>
      </main>
    );
  }

  return renderRecipe();
}
