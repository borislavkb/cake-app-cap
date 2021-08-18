import "./AddNewCake.css";
import InputRecipe from "../components/inputComponents/inputRecipe";
import InputIngredients from "../components/inputComponents/inputIngredients";
import ImageInput from "../components/inputComponents/imageInput";

import InputItemName from "../components/inputComponents/InputItemName";

export default function AddNewCake() {
  return (
    <form className="AddNewCake__form">
      <i className="input-file--icon"></i>
      <ImageInput />
      <InputItemName />

      <InputIngredients />
      <InputRecipe />

      <input type="submit" value="Submit" className="AddNewCake__btn-submit" />
    </form>
  );
}
