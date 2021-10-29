import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path={"/" | "/home" } component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
