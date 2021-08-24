import "./AddNewCake.css";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function AddNewCake() {
  const [recipes, setRecipes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const cakeName = form.cakeName.value;
    const cakeIngredients = form.cakeIngredients.value;
    const cakeRecipe = form.cakeRecipe.value;

    const recipeData = {
      id: uuidv4(),
      cakeName,
      cakeIngredients,
      cakeRecipe,
      isFav: false,
    };

    const recipesArray = JSON.parse(localStorage.getItem("recipesArray")) || [];
    recipesArray.push(recipeData);
    localStorage.setItem("recipesArray", JSON.stringify(recipesArray));

    const addRecipes = [...recipes, recipeData];
    setRecipes(recipes);

    form.reset();
  }

  return <Form onSubmit={handleSubmit} />;
}
