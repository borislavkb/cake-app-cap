export default function Form({ onSubmit, uploadImage }) {
  return (
    <form className="AddNewCake__form" onSubmit={(onSubmit, uploadImage)}>
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
