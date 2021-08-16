import "./AddNewCake.css";

export default function AddNewCake() {
  return (
    <form className="form">
      <i className="input-file--icon"></i>
      <input
        type="file"
        alt="select an image"
        id="imageInput"
        name="imageInput"
        accept="image/png, image/jpeg"
      />
      <input type="text" id="name" name="itemName" placeholder="cake name" />
      <textarea
        id="inputIngredients"
        name="inputIngredients"
        rows="5"
        cols="40"
        placeholder="Insert a list of ingredients"
      ></textarea>

      <textarea
        id="inputRecipe"
        name="inputRecipe"
        rows="5"
        cols="40"
        placeholder="Insert a recipe"
      ></textarea>

      <input type="submit" value="Submit" className="btn-submit" />
    </form>
  );
}
