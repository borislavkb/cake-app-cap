import "./AddNewCake.css";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { FaLessThanEqual } from "react-icons/fa";

export default function AddNewCake() {
  const successToast = () => {
    toast("Successfully saved!", {
      className: "custom-toast ",
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "v6aqpvob");
    setIsLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/cakesapp/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
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
      // image: https://res.cloudinary.com/cakesapp/image/upload/v1630419977/orl58ycl5zgtbh7fbbyx.jpg
    };
    // const uploadImage = async (e) => {
    //   const files = e.target.files;
    //   const data = new FormData();
    //   data.append("file", files[0]);

    //   const uploadImage = async (e) => {
    //     const files = e.target.files;
    //     const formData = new FormData();
    //     formData.append("file", files[0]);
    //     formData.append("upload_preset", "v6aqpvob");

    //     const res = await fetch(
    //       "https://api.cloudinary.com/v1_1/cakesapp/image/upload",
    //       { method: "POST", body: formData }
    //     );
    //     const file = await res.json();
    //     console.log(file);
    //     setImageSelected(file.secure_url);
    //     setIsLoading(false);
    //   };

    const recipesArray = JSON.parse(localStorage.getItem("recipesArray")) || [];
    recipesArray.push(recipeData);
    localStorage.setItem("recipesArray", JSON.stringify(recipesArray));
    successToast();

    form.reset();
  }

  return (
    <form className="AddNewCake__form" onSubmit={handleSubmit}>
      <i className="input-file--icon"></i>

      <input
        type="file"
        id="cakeImage"
        name="cakeImage"
        accept="image/png, image/jpeg"
        onChange={uploadImage}
      />
      <input
        type="text"
        id="cakeName"
        name="cakeName"
        placeholder="cake name"
      />
      <textarea
        id="cakeIngredients"
        name="cakeIngredients"
        rows="5"
        cols="40"
        placeholder="Insert a list of ingredients"
      ></textarea>

      <textarea
        id="cakeRecipe"
        name="cakeRecipe"
        rows="5"
        cols="40"
        placeholder="Insert a recipe"
      ></textarea>

      <input type="submit" value="Submit" className="AddNewCake__btn-submit" />
    </form>
  );
}
