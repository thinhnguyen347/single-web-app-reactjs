import React, { useState, useEffect } from "react";
import home_header from "./img/home-header.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeContent({ img, title, price }) {
  return (
    <div className="h-100 p-3">
      <div className="card h-100">
        <img src={img} className="card-img-top img-fluid" alt="yummy-food" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center flex-fill text-dark">
            {title}
          </h5>
          <p className="card-text text-center text-primary fw-bold">
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
            /suất
          </p>
          {/* <p
            to={`/${slug}`}
            className="btn btn-outline-warning w-0 fw-bold mt-3 text-dark"
          >
            Chi tiết
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [products, setProducts] = useState([]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
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

  useEffect(() => {
    fetch("https://yummy-db.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return (
    <>
      <div className="pb-3 overflow-hidden">
        <img src={home_header} className="w-100 img-fluid" alt="header" />
        <p className="h3 mt-5 py-3 text-center">BEST-SELLER THÁNG NÀY</p>
        <div className="pb-5">
          <Slider {...settings}>
            {products.map(({ id, img, title, price, slug }) => (
              <HomeContent
                key={id}
                img={img}
                title={title}
                price={price}
                slug={slug}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
