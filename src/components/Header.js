import "./Header.css";
import { Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <Switch>
        <Route path="/API">
          <h1 className="Header__title">Random recipes from the Internet !</h1>
        </Route>
        <Route path="/cakes/:id">
          <h1 className="Header__title">Single MyCakes</h1>
        </Route>
        <Route path="/favs">
          <h1 className="Header__title">Favourites</h1>
        </Route>
        <Route path="/add">
          <h1 className="Header__title">Insert a new cake</h1>
        </Route>
        <Route exact path="/">
          <h1 className="Header__title"> Catalogue</h1>
        </Route>
      </Switch>
    </header>
  );
}
