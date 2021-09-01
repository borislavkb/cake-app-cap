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
          <NavLink
            to="/"
            className="Footer__navigation--item"
            activeClassName="Footer__navigation--item__active"
          >
            <GiCakeSlice />
          </NavLink>
          <NavLink
            to="/add"
            className="Footer__navigation--item"
            activeClassName="Footer__navigation--item__active"
          >
            <BsPlusSquare />
          </NavLink>
          <NavLink
            to="/API"
            className="Footer__navigation--item"
            activeClassName="Footer__navigation--item__active"
          >
            <FaStoreAlt />
          </NavLink>
        </nav>
      </footer>
    </IconContext.Provider>
  );
}
