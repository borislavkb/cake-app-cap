import "./Header.css";
import { Switch, Route } from "react-router-dom";

export default function Header({ text }) {
  return (
    <header className="Header">
      <Switch>
        <Route path="/cakes/:id">
          <h1>Single MyCakes</h1>
        </Route>
        <Route path="/favs">
          <h1>Favourites</h1>
        </Route>
        <Route path="/add">
          <h1>Insert a new cake</h1>
        </Route>
        <Route exact path="/">
          <h1>Check the cake!</h1>
        </Route>
      </Switch>
    </header>
  );
}
