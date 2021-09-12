import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./component/NavigationBar.css";
import logo from "./component/img/logo.png";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-1 px-md-5 py-md-4 border-3 border-bottom border-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" width="130px" />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">
                    Thực đơn
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Đặt hàng
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Liên hệ
                  </a>
                </li>
                <li className="nav-item d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                  <a className="nav-link" href="/">
                    Giỏ hàng{" "}
                    <span className="badge bg-danger rounded-pill">
                      {/* {itemAmount} */}
                    </span>
                  </a>
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
                    {1/* {itemAmount} */}
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
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/menu">
            <About />
          </Route>
          <Route path="/shopping-cart">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Thực đơn</h2>;
}

function ShoppingCart() {
  return <h2>Users</h2>;
}
