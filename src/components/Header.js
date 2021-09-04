import "./Header.css";
import { Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <Switch>
        <Route path="/API">
          <h1 className="Header__title"> External recipes!</h1>
        </Route>
        <Route path="/cakes/:id">
          <h1 className="Header__title">Single cake recipe</h1>
        </Route>
        <Route path="/favs">
          <h1 className="Header__title">Favourites</h1>
        </Route>
        <Route path="/add">
          <h1 className="Header__title">Add a new recipe</h1>
        </Route>
        <Route exact path="/">
          <h1 className="Header__title"> My recipes</h1>
        </Route>
      </Switch>
    </header>
  );
}
