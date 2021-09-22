import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "./NavigationBar.css";
import navLogo from "./img/logo.png";

export default function NavBar() {
  const [input, setInput] = useState("");
  const [fetchComplete, setFetchComplete] = useState(false);

  const [searchResult, setSearchResult] = useState([]);

  function getValue(e) {
    let search_key = e.target.value;
    if (search_key !== "") setTimeout(() => setInput(search_key), 500);
  }

  useEffect(() => {
    fetch(`https://yummy-db.herokuapp.com/products?q=${input}`)
      .then((res) => res.json())
      .then((result) => {
        setSearchResult(result);
        setFetchComplete(true);
      });
  }, [input]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-1 px-md-5 py-md-4 border-3 border-bottom border-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={navLogo} alt="logo" width="130px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link text-dark"
                  aria-current="page"
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
                <NavLink
                  activeClassName="active"
                  className="nav-link text-dark"
                  to="/shopping-cart"
                >
                  Giỏ hàng
                  <span className="badge bg-danger rounded-pill ms-2">0</span>
                </NavLink>
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
            <div className="position-relative">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tìm kiếm"
                  aria-label="Search"
                  onKeyUp={getValue}
                />
                <button className="btn btn-outline-success" onClick={getValue}>
                  Tìm
                </button>
              </div>
              {fetchComplete && searchResult.length > 0 ? (
                <div className="result-modal container position-absolute top-100 start-0 bg-light rounded">
                  <span className="fw-lighter fst-italic">
                    {" "}
                    Có {searchResult.length} kết quả phù hợp:
                  </span>
                  {searchResult.map(({ img, title, id, slug }) => (
                    <Link to={`menu/${slug}">
                      <div
                        key={id}
                        className="row row-cols-2 pt-2 px-2 overflow-hidden "
                      >
                        <div className="col-4 mb-2">
                          <img
                            src={img}
                            alt={slug}
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="col-8 mb-2 align-self-center">
                          {title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="container position-absolute top-100 start-0 bg-light rounded p-2">
                  <p className="text-center m-0">Không có kết quả phù hợp.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
