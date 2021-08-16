import "./Main.css";
import ItemCard from "./ItemCard";
import image01 from "../images/sunday.png";
import image02 from "../images/red.png";
import image03 from "../images/chocolate.png";

export default function Main() {
  return (
    <main className="App-main">
      <ul>
        <ItemCard image={image01} />
        <ItemCard image={image02} />
        <ItemCard image={image03} />
        <ItemCard image={image01} />
        <ItemCard image={image03} />
        <ItemCard image={image02} />
        <ItemCard image={image01} />
        <ItemCard image={image02} />
        <ItemCard image={image03} />
      </ul>
    </main>
  );
}
