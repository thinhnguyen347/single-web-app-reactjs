import React, { useState, useEffect } from "react";
import home_header from "./home-header.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeContent from "./HomeContent";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
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
        setIsLoading(false);
      });
    localStorage.setItem("cart", "");
  }, []);

  return (
    <>
      <img src={home_header} className="w-100 img-fluid" alt="header" />

      <div className="pb-3 overflow-hidden">
        <p className="h3 mt-5 py-3 text-center">BEST-SELLER CỦA THÁNG</p>
        {isLoading ? (
          <div className="home loadingio-spinner-rolling-ejs4tg3ktq7">
            <div className="ldio-i7neyuiwdre d-flex justify-content-center">
              <div></div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
      <div className="pb-3 overflow-hidden">
        <p className="h3 mt- py-3 text-center">COMBO HOT</p>
      </div>
    </>
  );
}
