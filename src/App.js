import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import MyCakes from "./pages/MyCakes";
import Favs from "./pages/Favs";
import SingleCakePage from "./pages/SingleCakePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/cakes/:id">
          <SingleCakePage />
        </Route>
        <Route component={Favs} path="/favs" />
        <Route exact path="/">
          <MyCakes />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
