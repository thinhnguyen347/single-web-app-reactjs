import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/NavBar-Footer/NavigationBar";
import HomePage from "./component/HomePage/HomePage";
import MenuPage from "./component/MenuPage/MenuPage";
import ShoppingCart from "./component/CartPage/ShoppingCart";
import ContactPage from "./component/ContactPage/ContactPage";
import FoodDetails from "./component/MenuPage/FoodDetails";
import F;
import "./App.css";

export default function App() {
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
