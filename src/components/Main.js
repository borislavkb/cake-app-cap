import "./Main.css";
import ItemCard from "./ItemCard";
import SundayCakeImage from "../images/sunday.png";
import RedCakeImage from "../images/red.png";
import ChocolateCakeImage from "../images/chocolate.png";

export default function Main() {
  return (
    <main className="App-main">
      <ul>
        <ItemCard image={SundayCakeImage} />
        <ItemCard image={RedCakeImage} />
        <ItemCard image={ChocolateCakeImage} />
        <ItemCard image={SundayCakeImage} />
        <ItemCard image={ChocolateCakeImage} />
        <ItemCard image={RedCakeImage} />
        <ItemCard image={SundayCakeImage} />
        <ItemCard image={RedCakeImage} />
        <ItemCard image={ChocolateCakeImage} />
      </ul>
    </main>
  );
}
