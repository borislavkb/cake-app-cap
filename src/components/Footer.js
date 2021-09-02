import "./Footer.css";
import { NavLink } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { GiCakeSlice } from "react-icons/gi";
import { IconContext } from "react-icons";
import { FaStoreAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

export default function Footer() {
  return (
    <IconContext.Provider value={{ className: "global-class-icon" }}>
      <footer className="Footer">
        <nav className="Footer__navigation">
          <NavLink className="Footer__navigation--item" to="/">
            <GiCakeSlice />
          </NavLink>
          <NavLink className="Footer__navigation--item" to="/add">
            <BsPlusSquare />
          </NavLink>
          <NavLink className="Footer__navigation--item" to="/API">
            <FaStoreAlt />
          </NavLink>
          <NavLink className="Footer__navigation--item" to="/favs">
            <MdFavoriteBorder />
          </NavLink>
        </nav>
      </footer>
    </IconContext.Provider>
  );
}
