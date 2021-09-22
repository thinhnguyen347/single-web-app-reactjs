import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import footerLogo from "./component/img/footer.png";
import { addedItems } from "./component/data-cart";
import HomePage from "./component/HomePage";
import MenuPage from "./component/MenuPage";
import ShoppingCart from "./component/ShoppingCart";
import ContactPage from "./component/ContactPage";
import FoodDetails from "./component/FoodDetails";
import "./App.css";



function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-2 px-md-5">
      <a
        href="tel:+84984018891"
        className="col-12 col-md-12 col-lg-5 py-2 text-decoration-none text-danger fs-3 text-center text-lg-start border-bottom border-white border-bottom-lg-0"
      >
        Hotline: 0984.018.891
      </a>
      <Link
        to="/"
        className="col-3 col-md-4 col-lg-2 d-flex align-items-center justify-content-start justify-content-md-start justify-content-lg-center mb-3 mb-md-0 me-md-auto py-3"
      >
        <img src={footerLogo} alt="logo" width="100px" />
      </Link>
      <ul className="nav ps-2 col-9 col-md-8 col-lg-5 flex-column flex-sm-row align-items-end flex-md-row  justify-content-md-end ">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-dark">
            Trang chủ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link px-2 text-dark">
            Thực đơn
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link px-2 text-dark">
            Liên hệ
          </Link>
        </li>
      </ul>
      <p className="col-12 pt-3 pb-0 text-center fs-6 fw-lighter">
        © 2021 Yummy Co., Ltd.
      </p>
    </footer>
  );
}

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
