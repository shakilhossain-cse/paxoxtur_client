import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import ContactUs from "./pages/Contact/ContactUs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RideDetiles from "./pages/RideDetiles/RideDetiles";
import ManageApp from "./pages/ManageApp/ManageApp";
import PrivetRoute from "./Route/PrivetRoute";
import MyTiket from "./pages/MyTiket/MyTiket";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivetRoute path="/contact">
            <ContactUs />
          </PrivetRoute>

          <PrivetRoute path="/ride/:id">
            <RideDetiles />
          </PrivetRoute>
          <PrivetRoute path="/manageapp">
            <ManageApp />
          </PrivetRoute>
          <PrivetRoute path="/addride">
            <ManageApp />
          </PrivetRoute>
          <PrivetRoute path="/allorders">
            <ManageApp />
          </PrivetRoute>
          <PrivetRoute path="/mytikets">
            <MyTiket />
          </PrivetRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
