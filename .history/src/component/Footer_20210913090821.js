import "./Footer.css";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import footer from "./img/footer.png";

export default function Footer() {
  return (<>
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-2 px-md-5">
      <a
        href="tel:+84984018891"
        className="col-12 col-md-12 col-lg-5 py-2 text-decoration-none text-danger fs-3 text-center text-lg-start border-bottom border-white border-bottom-lg-0"
      >
        Hotline: 0984.018.891
      </a>
      <a
        href="/"
        className="col-3 col-md-4 col-lg-2 d-flex align-items-center justify-content-start justify-content-md-start justify-content-lg-center mb-3 mb-md-0 me-md-auto py-3"
      >
        <img src={footer} alt="logo" width="100px" />
      </a>
      <ul className="nav ps-2 col-9 col-md-8 col-lg-5 flex-column flex-sm-row align-items-end flex-md-row  justify-content-md-end ">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-dark">
            Trang chủ
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-dark">
            Thực đơn
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-dark">
            Liên hệ
          </a>
        </li>
      </ul>
      <p className="col-12 pt-3 pb-0 text-center fs-6 fw-lighter">
        © 2021 Yummy Co., Ltd.
      </p>
    </footer>

<Switch>
<Route path="/about">
  <About />
</Route>
<Route path="/topics">
  <Topics />
</Route>
<Route path="/">
  <Home />
</Route>
</Switch>
</>
  );
}
