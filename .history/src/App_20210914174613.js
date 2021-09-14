import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./component/NavigationBar.css";
import navLogo from "./component/img/logo.png";
import footerLogo from "./component/img/footer.png";
import { addedItems } from "./component/data-cart";
import HomePage from "./component/HomePage";
import MenuPage from "./component/MenuPage";
import ShoppingCart from "./component/ShoppingCart";
import ContactPage from "./component/ContactPage";
import "./App.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-1 px-md-5 py-md-4 border-3 border-bottom border-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={navLogo} alt="logo" width="130px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/menu">
                Thực đơn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                Liên hệ
              </Link>
            </li>
            <li className="nav-item d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
              <Link className="nav-link text-dark" to="/shopping-cart">
                Giỏ hàng
                <span className="badge bg-danger rounded-pill">
                  {addedItems.length}
                </span>
              </Link>
            </li>
          </ul>

          <Link
            className="mx-4 d-none d-sm-none d-md-none d-lg-block text-decoration-none text-dark"
            to="/shopping-cart"
          >
            <div className="position-relative">
              <span className="fs-4">
                <FaShoppingCart />
              </span>
              <span className="mt-2 position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                {addedItems.length}
              </span>
            </div>
          </Link>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

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
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Switch>
            <Route path="menu/:slug">
              <FoodDetails />
            </Route>
          </Switch>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
