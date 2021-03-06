import "./AddNewCake.css";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import defaultImage from "../images/chocolate.png";

export default function AddNewCake({ listOfCakes, handleAddNewRecipe }) {
  const successToast = () => {
    toast("Successfully saved!", {
      className: "custom-toast ",
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    localStorage.setItem("recipesArray", JSON.stringify(listOfCakes));
  }, [listOfCakes]);
  const [image, setImage] = useState([]);
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

    setImage(file);
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
      image_url: image.url,
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

    // const recipesArray = JSON.parse(localStorage.getItem("recipesArray")) || [];
    // recipesArray.push(recipeData);
    // localStorage.setItem("recipesArray", JSON.stringify(recipesArray));
    handleAddNewRecipe(recipeData);
    successToast();

    form.reset();
  }

  return (
    <form className="AddNewCake__form" onSubmit={handleSubmit}>
      <img
        src={!image.url ? defaultImage : image.url}
        alt="file preview"
        className="AddNewCake__form--imgPreview"
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
      <input
        type="file"
        id="cakeImage"
        name="cakeImage"
        accept="image/png, image/jpeg"
        onChange={uploadImage}
        className="custom-file-upload"
      />

      <input type="submit" value="Submit" className="AddNewCake__btn-submit" />
    </form>
  );
}
