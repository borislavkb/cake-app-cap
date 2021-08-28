import "./AddNewCake.css";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export default function AddNewCake() {
  const successToast = () => {
    toast("Successfully saved!", {
      className: "custom-toast ",
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
    successToast();

    form.reset();
  }

  return <Form onSubmit={handleSubmit} />;
}
