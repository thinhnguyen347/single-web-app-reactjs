import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "./NavigationBar.css";
import navLogo from "./img/logo.png";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const [cart] = useState(localStorage.getItem("cart"));
  const [input, setInput] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const timerHide = useRef(0);
  let timer,
    list = [...searchResult];

  function toggleMobileMenu() {
    let new_status = !showMobileMenu;
    setShowMobileMenu(new_status);
  }

  function getValue(e) {
    let search_key = e.target.value;
    if (search_key.length !== 0) {
      setTimeout(() => setInput(search_key), 300);
      setIsLoading(true);
    } else {
      setShowAlertModal(false);
      setShowResultModal(false);
    }

    if (list.length !== 0) {
      setShowResultModal(true);
      setShowAlertModal(false);
    } else {
      setShowResultModal(false);
    }
  }

  function hideModal() {
    setShowAlertModal(false);
    setShowResultModal(false);
  }

  function autoHideResultModal() {
    setShowResultModal(false);
  }

  useEffect(() => {
    if (input !== "") {
      fetch(`https://yummy-db.herokuapp.com/products?title_like=${input}`)
        .then((res) => res.json())
        .then((result) => {
          clearTimeout(timerHide.current);
          setSearchResult(result);
          setShowAlertModal(false);
          setShowResultModal(true);
          setIsLoading(false);
          if (result.length === 0) setShowAlertModal(true);
          timerHide.current = setTimeout(() => setShowAlertModal(false), 1000);
        });
    }
  }, [input]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-1 px-md-5 py-md-4 border-3 border-bottom border-secondary position-relative">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" onClick={hideModal}>
            <img src={navLogo} alt="logo" width="130px" />
          </NavLink>
          <Link
            className="d-block ms-auto me-2 d-lg-none text-decoration-none text-dark"
            to="/shopping-cart"
          >
            <div className="position-relative me-1">
              <span className="fs-4">
                <FaShoppingCart />
              </span>
              <span className="mt-2 position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                {cart.length === 0 ? 0 : JSON.parse(cart).length}
              </span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
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
                  onClick={hideModal}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link text-dark"
                  to="/menu"
                  onClick={hideModal}
                >
                  Thực đơn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link text-dark"
                  to="/contact"
                  onClick={hideModal}
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>

            <Link
              className="mx-4 d-none d-sm-none d-md-none d-lg-block text-decoration-none text-dark"
              to="/shopping-cart"
              onClick={hideModal}
            >
              <div className="position-relative me-4">
                <span className="fs-4">
                  <FaShoppingCart />
                </span>
                <span className="mt-2 position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                  {cart.length === 0 ? 0 : JSON.parse(cart).length}
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
                  onChange={getValue}
                  onBlur={() => (timer = setTimeout(autoHideResultModal, 1500))}
                />
                <button className="btn btn-outline-success" onClick={getValue}>
                  Tìm
                </button>
              </div>

              {showResultModal && (
                <div
                  className="result-modal container position-absolute top-100 start-0 bg-light rounded"
                  onMouseLeave={() =>
                    (timer = setTimeout(autoHideResultModal, 1500))
                  }
                  onMouseEnter={() => clearTimeout(timer)}
                >
                  {isLoading ? (
                    <span className="fw-lighter fst-italic">
                      Đang tìm kiếm...
                    </span>
                  ) : (
                    <>
                      {list.length > 0 && (
                        <>
                          <span className="fw-lighter fst-italic">
                            Có {list.length} kết quả gợi ý:
                          </span>
                          {list.map(({ img, title, id, slug }) => (
                            <Link
                              to={`/menu/${slug}/${id}`}
                              key={id}
                              className="text-decoration-none text-dark "
                              onClick={hideModal}
                            >
                              <div className="row row-cols-2 pt-2 px-2 overflow-hidden">
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
                        </>
                      )}
                    </>
                  )}
                </div>
              )}

              {showAlertModal && (
                <div className="container position-absolute top-100 start-0 bg-light rounded p-2">
                  <p className="text-center m-0">Không có kết quả phù hợp.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <MobileNav
          cartTotal={cart.length === 0 ? 0 : cart.length}
          showMobileMenu={showMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          hideModal={hideModal}
        />
      </nav>
    </>
  );
}
