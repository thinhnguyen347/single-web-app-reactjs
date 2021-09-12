import React, { useState } from "react";
import home_header from "./img/home-header.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PRODUCTS } from "./data-products";

function MainContent({ img, title, price }) {
  return (
    <div className="col p-4">
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

          <a href="/" className="btn btn-outline-primary w-100 fw-bold mt-3">
            Chi tiết
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomeContent() {
  const [products] = useState(PRODUCTS);

  let settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <img src={home_header} className="w-100 img-fluid" alt="header" />
<
      <Slider {...settings}>
        {products.map(({ id, img, title, price }) => (
          <MainContent key={id} img={img} title={title} price={price} />
        ))}
      </Slider>
    </>
  );
}
