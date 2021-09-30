import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecommendItem from "./RecommendItem";

export default function Recommend(id) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://yummy-db.herokuapp.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        let index = data.findIndex((item)=> item.id === id)
        data
        setItems(data);
        setIsLoading(false);
      });
  }, [id]);

  let settings = {
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
          dots: true,
        },

      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="pb-3 overflow-hidden">
        <p className="h3 py-3 pt-md-5 text-center">GỢI Ý KHÁC CHO BẠN</p>
        {isLoading ? (
          <div className="home loadingio-spinner-rolling-ejs4tg3ktq7">
            <div className="ldio-i7neyuiwdre d-flex justify-content-center">
              <div></div>
            </div>
          </div>
        ) : (
          <div className="pb-5">
            <Slider {...settings}>
              {items.map(({ id, img, title, price, slug }) => (
                <RecommendItem
                  key={id}
                  img={img}
                  title={title}
                  price={price}
                  slug={slug}
                  id={id}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}
