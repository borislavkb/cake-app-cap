import "./SingleCakePage.css";

export default function SingleCakePage() {
  function renderSingleCake() {
    return (
      <main className="SinglePage__content">
        <div>
          <h2 className="SinglePage__cake--title">Item title</h2>
          <img src="" alt="" className="SinglePage__cake--image" />
          <h3>Ingredients:</h3>
          <p>Item 1</p>
          <h3>Recipe: </h3>
          <p>Recipe 1</p>
        </div>
      </main>
    );
  }

  return renderSingleCake();
}
