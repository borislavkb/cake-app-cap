import "./AddNewCake.css";
import InputRecipe from "../components/inputComponents/inputRecipe";
import InputIngredients from "../components/inputComponents/inputIngredients";
import ImageInput from "../components/inputComponents/imageInput";
import { v4 as uuidv4 } from "uuid";

import InputItemName from "../components/inputComponents/InputItemName";

export default function AddNewCake() {
  function handleSubmit(event) {
    event.preventDefault(event);
    const form = event.target;
    const stepsToRecipe = form.inputRecipe.value;
    const ingredients = form.inputIngredients.value;
    const itemName = form.itemName.value;

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

  return (
    <form className="AddNewCake__form" onSubmit={handleSubmit}>
      <i className="input-file--icon"></i>
      <ImageInput />
      <InputItemName />
      <InputIngredients />
      <InputRecipe />

      <input type="submit" value="Submit" className="AddNewCake__btn-submit" />
    </form>
  );
}
