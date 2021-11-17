import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Manage from "./pages/Manage/Manage";
import Myorder from "./pages/Myorder/Myorder";
import Register from "./pages/Register/Register";
import Footer from "./pages/shared/Footer.js/Footer";
import Header from "./pages/shared/Header.js/Header";
import PrivetRoute from "./Routes/PrivetRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          <PrivetRoute path="/booking/:id">
            <Booking />
          </PrivetRoute>
          <PrivetRoute path="/myorder">
            <Myorder />
          </PrivetRoute>
          <PrivetRoute path="/manage">
            <Manage />
          </PrivetRoute>
          <Route path="/*">
            <h1 className="py-5 bd-light text-center">404 Not Found</h1>
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
