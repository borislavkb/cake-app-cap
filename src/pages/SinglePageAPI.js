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
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipeAPI(data);
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
      <main className="SinglePage__content">
        <div className="SinglePage__content--box">
          <h2 className="SinglePage__cake--title relief">{recipeAPI.label}</h2>
          <img className="SinglePage__cake--image" src={chocolateCake} alt="" />

          <h3 className="SinglePage__cake--ingredients">Ingredients:</h3>
          <p className="SinglePage__cake--text">{recipeAPI.ingredients}</p>
          <h3 className="SinglePage__cake--recipe">Recipe: </h3>
        </div>
      </main>
    );
  }

  return renderRecipe();
}
