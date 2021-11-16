import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./pages/shared/Footer.js/Footer";
import Header from "./pages/shared/Header.js/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
