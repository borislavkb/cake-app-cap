import "./AddNewCake.css";
import InputRecipe from "../components/inputComponents/inputRecipe";
import InputIngredients from "../components/inputComponents/inputIngredients";
import ImageInput from "../components/inputComponents/imageInput";

import InputItemName from "../components/inputComponents/InputItemName";
import { useState } from "react";

export default function AddNewCake() {
  const [recipes, setRecipes] = useState([]);

  function handleSubmit(event) {
    event.PreventDefault();
    const form = event.target;
    console.log(form);
    const newRecipe = form.inputRecipe.value;

    const addRecipe = [
      ...recipes,
      {
        id: 33,
        recipe: newRecipe,
      },
    ];
    setRecipes(addRecipe);
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
