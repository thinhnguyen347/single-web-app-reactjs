import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./component/NavigationBar.css";
import logo from "./component/img/logo.png";
import { addedItems } from "./component/data-cart";
import HomeContent from "./component/HomeContent";
import MenuLayout from "./component/Menu";
import ShoppingCart from "./component/ShoppingCart";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import "./App.css";

export default function App() {
  //const [homeActive, setHomeActive] = useState(true);
  let match = useRouteMatch();
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
                  <Link className="nav-link text-dark" to="/">
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
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/menu">
            <MenuLayout />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

function Home() {
  const [products] = useState(PRODUCTS);

  let settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="pb-5 ">
      <img src={home_header} className="w-100 img-fluid" alt="header" />
      <p className="h3 mt-5 py-3 text-center">BÁN CHẠY TRONG THÁNG</p>
      <div className="pb-5">
        <Slider {...settings}>
          {products.map(({ id, img, title, price, slug }) => (
            <Link
              to={`${match.url}/${slug}`}
              className="text-decoration-none"
              key={id}
            >
              <HomeContent img={img} title={title} price={price} />
            </Link>
          ))}
        </Slider>
      </div>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2">
        <div classname="col col-md-6">
          <h3>Requested topic ID: {topicId}</h3>
        </div>
        <div classname="col col-md-6"></div>
      </div>
    </div>
  );
}

