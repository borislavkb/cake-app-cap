import "./App.css";
import { Switch, Route } from "react-router-dom";
import MyCakes from "./pages/MyCakes";
import Favs from "./pages/Favs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Favs} path="/favs" />
        <Route exact path="/">
          <MyCakes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
