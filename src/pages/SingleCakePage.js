import "./SingleCakePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";

export default function SingleCakePage() {
  return (
    <div className="Single-page">
      <Header />

      <section className="Single-page__recipe">
        <ItemCard />
        <h3>Ingredients List:</h3>

        <ul>
          <li>Sugar</li>
          <li>Spice</li>
          <li>Everything nice</li>
          <li>Chemical X</li>
          <li>Sugar</li>
          <li>Spice</li>
          <li>Everything nice</li>
          <li>Chemical X</li>
          <li>Sugar</li>
          <li>Spice</li>
          <li>Everything nice</li>
          <li>Chemical X</li>
          <li>Sugar</li>
          <li>Spice</li>
          <li>Everything nice</li>
          <li>Chemical X</li>
          <li>Sugar</li>
          <li>Spice</li>
          <li>Everything nice</li>
          <li>Chemical X</li>
        </ul>
        <h3>Steps:</h3>
        <ol>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
          <li>Step 5</li>
          <li>Step 6</li>
          <li>Step 7</li>
        </ol>
      </section>
      <Footer />
    </div>
  );
}
