import React, { useState } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import home_header from "./img/home-header.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PRODUCTS } from "./data-products";

function MainContent({ img, title, price }) {
  return (
    <div className="h-100 p-3">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="yummy-food" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center flex-fill">{title}</h5>
          <p className="card-text text-center text-primary fw-bold">
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
            /suất
          </p>

          <p className="btn btn-outline-warning w-100 fw-bold mt-3 text-dark">
            Chi tiết
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
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
            <MainContent key={id} img={img} title={title} price={price} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
