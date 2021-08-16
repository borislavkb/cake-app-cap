import "./Footer.css";
import { NavLink } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="Footer">
      <nav className="Footer__navigation">
        <NavLink to="/">MyCakes</NavLink>
        <NavLink to="/add">
          <BsPlusSquare size="2rem" />
        </NavLink>
        <NavLink to="/favs">Favs</NavLink>
      </nav>
    </footer>
  );
}
