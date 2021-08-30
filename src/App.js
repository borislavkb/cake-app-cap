import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MyCakesList from "./pages/MyCakesList";
import Favs from "./pages/Favs";
import SingleCakePage from "./pages/SingleCakePage";
import AddNewCake from "./pages/AddNewCake";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListAPI from "./pages/ListAPI";


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
        <Route path="/API">
          <ListAPI />
        </Route>

        <Route path="/add">
          <AddNewCake />
        </Route>
        <Route exact path="/">
          <MyCakesList />
        </Route>
      </Switch>
      <Footer />
      <ToastContainer draggable={false} transition={Bounce} autoclose={5000} />
    </div>
  );
}
export default App;
