import { NavLink } from "react-router-dom";

export default function MobileNav({
  cartTotal,
  showMobileMenu,
  toggleMobileMenu,
  hideModal,
}) {
  return (
    <div
      className={`mobile-nav d-lg-none p-4 w-100 position-absolute top-0 ${
        showMobileMenu ? "start-0" : "end-100"
      }`}
    >
      <button
        className="btn btn-close d-block ms-auto me-0 my-3"
        onClick={toggleMobileMenu}
      ></button>
      <ul className="mob-navbar-nav mx-0 px-0 position-relative">
        <li className="nav-item ">
          <NavLink
            activeClassName="active"
            className="nav-link text-dark px-2 text-center fs-4"
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
            className="nav-link text-dark px-2 text-center"
            to="/menu"
            onClick={hideModal}
          >
            Thực đơn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link text-dark px-2 text-center"
            to="/contact"
            onClick={hideModal}
          >
            Liên hệ
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            activeClassName="active"
            className="nav-link text-dark px-1 text-center"
            to="/shopping-cart"
            onClick={hideModal}
          >
            Giỏ hàng
            <span className="badge bg-danger rounded-pill ms-2">{cartTotal}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
