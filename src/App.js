import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
