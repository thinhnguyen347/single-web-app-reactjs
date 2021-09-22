import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";
import navLogo from "./img/logo.png";

export default function NavBar() {
    const 
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
              <NavLink
                activeClassName="active"
                className="nav-link text-dark"
                to="/"
                exact
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link text-dark"
                to="/menu"
              >
                Thực đơn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link text-dark"
                to="/contact"
              >
                Liên hệ
              </NavLink>
            </li>
            <li className="nav-item d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
              <Link className="nav-link text-dark" to="/shopping-cart">
                Giỏ hàng
                <span className="badge bg-danger rounded-pill">
                  0
                </span>
              </Link>
            </li>
          </ul>

          <Link
            className="mx-4 d-none d-sm-none d-md-none d-lg-block text-decoration-none text-dark"
            to="/shopping-cart"
          >
            <div className="position-relative me-4">
              <span className="fs-4">
                <FaShoppingCart />
              </span>
              <span className="mt-2 position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                0
              </span>
            </div>
          </Link>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Tìm</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
