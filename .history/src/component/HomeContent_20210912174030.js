import React, { useState, useRouteMatch, useParams } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
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
  let match = useRouteMatch();

  /

  return (
    <div className="pb-5 ">
      <img src={home_header} className="w-100 img-fluid" alt="header" />
      <p className="h3 mt-5 py-3 text-center">BÁN CHẠY TRONG THÁNG</p>
      <div className="pb-5">
        {/* <Slider {...settings}>
          {products.map(({ id, img, title, price, slug }) => (
            <Link to={`${match.url}/${slug}`}>
              {" "}
              <MainContent key={id} img={img} title={title} price={price} />
            </Link>
          ))}
        </Slider> */}
        {products.map(({ id, img, title, price, slug }) => (
            <Link to={`${match.url}/${slug}`}>
              {" "}
              <MainContent key={id} img={img} title={title} price={price} />
            </Link>
          ))}
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
  return <h3>Requested topic ID: {topicId}</h3>;
}
