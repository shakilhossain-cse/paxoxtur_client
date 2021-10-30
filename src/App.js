import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import ContactUs from "./pages/Contact/ContactUs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivetRoute from "./Route/PrivetRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path={['/','/home']} component={Home} />
          <PrivetRoute  path="/contact">
            <ContactUs/>
          </PrivetRoute>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <PrivetRoute path='/rides/:id' component={ }/> */}
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
