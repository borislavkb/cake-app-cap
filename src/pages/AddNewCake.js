import "./AddNewCake.css";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";

export default function AddNewCake() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const itemName = form.cakeName.value;
    const ingredients = form.cakeIngredients.value;
    const stepsToRecipe = form.cakeRecipe.value;

    const recipeData = {
      id: uuidv4(),
      itemName,
      stepsToRecipe,
      ingredients,
    };

    const recipesArray = JSON.parse(localStorage.getItem("recipesArray")) || [];
    recipesArray.push(recipeData);
    localStorage.setItem("recipesArray", JSON.stringify(recipesArray));

    form.reset();
  }

  return <Form onSubmit={handleSubmit} />;
}
