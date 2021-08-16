import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <nav className="Footer__navigation">
        <NavLink to="/">MyCakes</NavLink>
        <NavLink to="/add">Plus</NavLink>
        <NavLink to="/favs">Favs</NavLink>
      </nav>
    </footer>
  );
}
