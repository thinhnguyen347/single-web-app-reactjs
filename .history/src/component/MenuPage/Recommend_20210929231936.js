import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Recommend(isLoading, id) {
  useEffect(() => {
    fetch(`https://yummy-db.herokuapp.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
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
    </>
  );
}
