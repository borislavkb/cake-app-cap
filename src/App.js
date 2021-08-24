import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MyCakesList from "./pages/MyCakesList";
import Favs from "./pages/Favs";
import SingleCakePage from "./pages/SingleCakePage";
import AddNewCake from "./pages/AddNewCake";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/cakes/:id">
          <SingleCakePage />
        </Route>
        <Route path="/favs">
          <Favs />
        </Route>
        <Route path="/add">
          <AddNewCake />
        </Route>
        <Route exact path="/">
          <MyCakesList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
