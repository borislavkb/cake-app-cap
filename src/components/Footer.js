import "./Footer.css";
import { NavLink } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { GiCakeSlice } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { IconContext } from "react-icons";
import { icons } from "react-icons/lib";

export default function Footer() {
  return (
    <IconContext.Provider value={{ className: "global-class-icon" }}>
      <footer className="Footer">
        <nav className="Footer__navigation">
          <NavLink className="Footer__navigation item" to="/">
            <GiCakeSlice size="2rem" />
          </NavLink>
          <NavLink className="Footer__navigation item" to="/add">
            <BsPlusSquare size="2rem" />
          </NavLink>
          <NavLink className="Footer__navigation item" to="/favs">
            <MdFavoriteBorder size="2rem" />
          </NavLink>
        </nav>
      </footer>
    </IconContext.Provider>
  );
}
