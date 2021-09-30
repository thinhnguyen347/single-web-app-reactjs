import { NavLink } from "react-router-dom";

export default function MobileNav({
  cartTotal,
  showMobileMenu,
  toggleMobileMenu,
  hideModal,
}) {
  return (
    <div
      className={`mobile-nav d-lg-none p-4 position-absolute top-0 ${
        showMobileMenu ? "start-0" : "end-100"
      }`}
      onMouseLeave={()=> setTimeout(toggleMobileMenu}
    >
      <button
        className="btn btn-close d-block ms-auto me-0 mb-3"
        onClick={toggleMobileMenu}
      ></button>
      <ul className="mob-navbar-nav mx-0 px-0 position-relative">
        <li className="nav-item my-3">
          <NavLink
            activeClassName="active"
            className="nav-link text-dark px-2 text-center fs-3 rounded-pill"
            aria-current="page"
            to="/"
            exact
            onClick={hideModal}
          >
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item my-3">
          <NavLink
            activeClassName="active"
            className="nav-link text-dark px-2 text-center rounded-pill"
            to="/menu"
            onClick={hideModal}
          >
            Thực đơn
          </NavLink>
        </li>
        <li className="nav-item my-3">
          <NavLink
            activeClassName="active"
            className="nav-link text-dark px-2 text-center rounded-pill"
            to="/contact"
            onClick={hideModal}
          >
            Liên hệ
          </NavLink>
        </li>
        <li className="nav-item my-3">
          <NavLink
            activeClassName="active"
            className="nav-link text-dark px-1 text-center rounded-pill"
            to="/shopping-cart"
            onClick={hideModal}
          >
            Giỏ hàng
            <span className="badge bg-danger rounded-pill ms-1">{cartTotal}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
