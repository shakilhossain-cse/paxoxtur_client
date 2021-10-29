import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactUs from "./pages/Contact/ContactUs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={['/','/home']} component={Home} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
