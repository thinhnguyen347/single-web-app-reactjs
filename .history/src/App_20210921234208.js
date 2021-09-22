import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./component/NavigationBar";
import HomePage from "./component/HomePage";
import MenuPage from "./component/MenuPage";
import ShoppingCart from "./component/ShoppingCart";
import ContactPage from "./component/ContactPage";
import FoodDetails from "./component/FoodDetails";
import Footer from "./component/Footer";
import "./App.css";

export default function App() {

  let cart = localStorage.getItem('')
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route path="/menu/:slug/:id">
            <FoodDetails />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
