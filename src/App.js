import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/WelcomePage";
import MyCakes from "./pages/MyCakes";
import Favs from "./pages/Favs";
import SingleCakePage from "./pages/SingleCakePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cakes/:id">
          <SingleCakePage />
        </Route>
        <Route component={Favs} path="/favs" />
        <Route exact path="/">
          <MyCakes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
