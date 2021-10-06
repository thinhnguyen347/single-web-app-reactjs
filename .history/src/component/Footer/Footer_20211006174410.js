import { Link } from "react-router-dom";
import footerLogo from "./footer.png";

export default function Footer() {
  return (
    <>
      <div className="newsletter container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3">
            <h6 className="d-flex align">Đăng kí nhận tin</h6>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <input
              type="hidden"
              id="newsletter-tags"
              name="contact[tags]"
              value="khách hàng tiềm năng, bản tin"
            />
            <input
              required=""
              type="email"
              id="newsletter-email"
              value=""
              placeholder="Nhập email của bạn"
              name="contact[email]"
              aria-label="Email Address"
            />
            <button type="submit" className="button dark">
              Đăng kí
            </button>
          </div>
        </div>
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center px-2 px-md-5">
        <a
          href="tel:+84984018891"
          className="col-12 col-md-12 col-lg-5 py-2 text-decoration-none text-danger fs-3 text-center text-lg-start border-bottom border-success border-bottom-lg-0"
        >
          Hotline: 0984.018.891
        </a>
        <Link
          to="/"
          className="col-3 col-md-4 col-lg-2 d-flex align-items-center justify-content-start justify-content-md-start justify-content-lg-center mb-3 mb-md-0 me-md-auto py-3"
        >
          <img src={footerLogo} alt="logo" width="100px" />
        </Link>
        <ul className="nav ps-2 col-9 col-sm-6 justify-content-sm-end col-md-8 col-lg-5 flex-column flex-sm-row align-items-end flex-md-row  justify-content-md-end ">
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
    </>
  );
}
