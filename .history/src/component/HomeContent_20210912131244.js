import home_header from "./img/home-header.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {PRODUCTS} from "./data-products";

function MainContent({ img, title, price }) {
    return (
      <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-3">
        <div className="card h-100 position-relative">
          <p className="btn position-absolute p-2 p-md-1 bg-primary text-white border-radius-start top-0 end-0 opacity-0">
            Chi tiết
          </p>
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
  
            <a href="/" className="btn btn-warning w-100 fw-bold mt-3">
              Đặt ngay
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
        autoplay: true
      };

  return (
    <>
      <img src={home_header} className="w-100 img-fluid" alt="header" />

      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  
    </>
  );
}
