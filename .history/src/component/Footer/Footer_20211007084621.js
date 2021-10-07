import { Link } from "react-router-dom";
import footerLogo from "./footer.png";
import { FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="newsletter container-fluid py-4 py-lg-5">
        <div className="row g-4 d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center">
            <span className="d-block fs-4">
                <FaRegEnvelope />
              </span>
            <label htmlFor="email" className="d-block ms-2">
              
              Đăng ký nhận&nbsp;tin
            </label></div>

          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
            <input
              type="email"
              id="email"
              className="flex-fill p-2 border-secondary border-1 border-end-0 border-start-0 border-top-0"
              placeholder="Nhập email của bạn..."
              name="contact"
              aria-label="Email Address"
            />
            <button className="bg-dark py-2 px-4 rounded-end border-1 border-success border-end-0 border-start-0 border-top-0 text-light">
              Gửi
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
          <img src={footerLogo} alt="logo" width="80px" />
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
