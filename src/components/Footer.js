import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="App-footer">
      <ul className="App-footer__navigation">
        <NavLink to="/">
          <li>MyCakes</li>
        </NavLink>
        <NavLink to="/add">
          <li>Plus</li>
        </NavLink>
        <NavLink to="/favs">
          <li>Favs</li>
        </NavLink>
      </ul>
    </footer>
  );
}
