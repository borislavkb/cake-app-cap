import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyCakes from "./pages/MyCakes";
import Favs from "./pages/Favs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={MyCakes} exact path="/mycakes" />
        <Route component={Favs} path="/favs" />
        <Route component={Home} exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
