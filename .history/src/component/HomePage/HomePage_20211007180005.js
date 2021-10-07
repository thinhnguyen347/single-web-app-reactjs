import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeCarousel from "./HomeCarousel";
import Combo from "./HomeCombo";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
          dots: false,
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
  }, []);

  if (window.localStorage.getItem("cart") === null) window.localStorage.setItem("cart", "[]");

  return (
    <>
      <div classNamestyle={padding:34.48% 0 0 0;position:relative;}><iframe src="https://player.vimeo.com/video/625340003?h=b677a81866&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Final_Scene_1"></iframe></div>
      
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
              {products.map(({ id, img, title, price, slug, unit }) => (
                <HomeCarousel
                  key={id}
                  img={img}
                  title={title}
                  price={price}
                  slug={slug}
                  unit={unit}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
      <div className="pb-5 overflow-hidden">
        <p className="h3 py-3 mb-4 text-center">COMBO HOT</p>
        <Combo />
      </div>
    </>
  );
}
