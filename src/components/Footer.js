import "./Footer.css";
import { NavLink } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { GiCakeSlice } from "react-icons/gi";
import { IconContext } from "react-icons";
import { FaStoreAlt } from "react-icons/fa";

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
        </nav>
      </footer>
    </IconContext.Provider>
  );
}
